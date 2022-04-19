import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { user, loginInWithGoogle, loginWithEmailAndPassword } = useFirebase();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginForm = (event) =>{
    event.preventDefault();
    loginWithEmailAndPassword(email, password);
  }
  return (
    <div className='text-white'>
      <Container className='my-5'>
        <div className='w-50 mx-auto p-3 rounded-3 border border-2'>
          <div className='text-center mb-3'>
            <p>Sign in with:</p>
            <button
              type='button'
              className='btn btn-danger ms-3'
              onClick={loginInWithGoogle}
            >
              Google
            </button>
          </div>
          <form onSubmit={handleLoginForm}>
            <p className='text-center'>Or</p>

            {/* <!-- Email input --> */}
            <div className='form-outline mb-4'>
              <Form.Group className='mb-4 mx-5' controlId='formBasicEmail'>
                <Row>
                  <Col lg={2}>
                    <Form.Label className='px-3'>Email</Form.Label>
                  </Col>
                  <Col lg={9}>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      required
                      onBlur={handleEmail}
                    />
                  </Col>
                </Row>
                <Form.Text className='text-muted'></Form.Text>
              </Form.Group>
            </div>

            {/* <!-- Password input --> */}
            <div className='form-outline mb-4'>
              <Form.Group className='mb-4 mx-5' controlId='formBasicPassword'>
                <Row>
                  <Col lg={2}>
                    <Form.Label className='px-3'>Password </Form.Label>
                  </Col>
                  <Col lg={9}>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      required
                      onBlur={handlePassword}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </div>

            {/* <!-- Submit button --> */}
            <button
              type='submit'
              className='btn btn-primary btn-block mb-4'
            >
              Sign in
            </button>
          </form>
          <div className='text-center'>
            <h6>
              Not a member?{" "}
              <Link to='/register' className='fw-bold'>
                Register
              </Link>
            </h6>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
