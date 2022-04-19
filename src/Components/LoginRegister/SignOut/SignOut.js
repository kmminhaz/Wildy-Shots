import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../../firebase.init";

const auth = getAuth(app);

const SignOutUser = () => {
    const navigate = useNavigate();
  signOut(auth)
    .then(() => {
        console.log('hello User');
        navigate("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

const SignOut = () => {
  return (
      <div>
          <h3 className="text-white">hello user</h3>
          {SignOutUser}
      </div>
  );
};

export default SignOut;
