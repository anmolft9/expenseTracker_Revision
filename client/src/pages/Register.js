import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Register = () => {
  return (
    <div className="RegisterPage d-flex justify-content-center mt-5">
      <div className="RegisterForm border shadow p-5 mb-5 bg-body-tertiary rounded">
        <h3>Register</h3>
        <hr />

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control type="password" placeholder="Retype Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
