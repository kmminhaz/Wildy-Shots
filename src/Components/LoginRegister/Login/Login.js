import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const handleLoginForm = () =>{

}
const Login = () => {
  const { loginInWithGoogle } = useFirebase();

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
                    />
                  </Col>
                </Row>
              </Form.Group>
            </div>

            {/* <!-- Submit button --> */}
            <button type='submit' className='btn btn-light btn-block mb-4 fw-bold'>
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
