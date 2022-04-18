import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../../firebase.init";

import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import Loading from "../Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");

  const location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const [user, loading, error] = useAuthState(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  const resetPassword = async () => {
    setEmail(emailRef.current.value);
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success(" send email!");
    } else {
      alert("please provide your email");
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <h1 className="text-center text-primary my-2">please Login</h1>
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
        gym services ?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none "
        >
          Register
        </Link>
      </p>
      <p>
        forget password?{" "}
        <button
          onClick={resetPassword}
          className="text-primary pe-auto text-decoration-none border-0"
        >
          Reset password
        </button>
      </p>
      <Toaster position="top-right" reverseOrder={false} />
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
