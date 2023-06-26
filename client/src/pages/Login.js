import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { useRef } from "react";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  return (
    <MainLayout>
      <div className="loginPage d-flex justify-content-center mt-5">
        <div className="loginForm border shadow p-5 mb-5 bg-body-tertiary rounded">
          <h3>Login</h3>
          <hr />

          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="text-end">
              Dont have account? <Link to="/register">Register</Link>
            </div>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};
