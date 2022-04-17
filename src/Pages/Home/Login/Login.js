import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleRegister = () => {
    navigate("/register");
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };
  return (
    <div className="form-container">
      <h1 className="text-center text-primary my-2">please Login</h1>
      <Form onSubmit={formSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        gym services ?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none "
          onClick={handleRegister}
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
