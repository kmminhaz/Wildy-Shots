import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const { useState, useEffect } = require("react");

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        sendEmailVerification(auth.currentUser).then(() => {
          setSuccess(
            `A varification Email has been sent to ${user.reloadUserInfo.email}`
          );
        });
      })
      .catch((error) => {
        setError('Email Or Password is Wrong');
      });
  };

  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setError('Email or Password is wrong');
      });
  };

  const createAccountWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(auth.currentUser).then(() => {
          setSuccess(
            `A varification Email has been sent to ${user.reloadUserInfo.email}`
          );
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
  }, []);

  const resetPassword = (email) =>{
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccess(`Your password reset Email sent successfully to ${email}`);
      })
      .catch((error) => {
        setError("Your password reset Email sent faliled");
      });
  }

  return {
    success,
    error,
    user,
    loginInWithGoogle,
    loginWithEmailAndPassword,
    createAccountWithEmailAndPassword,
    signOutUser,
    resetPassword,
  };
};

export default useFirebase;
