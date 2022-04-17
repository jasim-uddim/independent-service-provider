import React from "react";
import { Link } from "react-router-dom";
import google from "../../../images/social/google (1).png";
import github from "../../../images/social/github.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <div className="d-flex d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="px-2 mt-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      {errorElement}
      <Link className="d-block text-center my-3 " to="/home">
        <button
          onClick={handleSignInWithGoogle}
          className="bg-info p-2 w-50 text-center border-0 rounded"
        >
          <img src={google} alt="" />
          <span className="ps-2">Google</span>
        </button>
      </Link>
      <Link className="d-block text-center my-2 " to="/home">
        <button className="bg-info p-2 w-50 text-center border-0 rounded">
          <img src={github} alt="" />
          <span className="ps-2">Github</span>
        </button>
      </Link>
    </div>
  );
};

export default SocialLogin;
