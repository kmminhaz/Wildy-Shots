import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
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
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        setError(error);
      });
  };

  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        setError(error);
      });
  };

  const createAccountWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //   console.log(user);
      })
      .catch((error) => {
        setError(error);
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

  return {
    success,
    error,
    user,
    loginInWithGoogle,
    loginWithEmailAndPassword,
    createAccountWithEmailAndPassword,
    signOutUser,
  };
};

export default useFirebase;
