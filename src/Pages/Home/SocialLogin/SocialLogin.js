import { Link, useNavigate } from "react-router-dom";
import google from "../../../images/social/google (1).png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  const handleSignInWithGithub = () => {
    signInWithGithub();
  };

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    navigate("/");
  }

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
        <button
          onClick={handleSignInWithGithub}
          className="bg-info p-2 w-50 text-center border-0 rounded"
        >
          <img src={github} alt="" />
          <span className="ps-2">Github</span>
        </button>
      </Link>
    </div>
  );
};

export default SocialLogin;
