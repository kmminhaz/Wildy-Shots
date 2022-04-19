import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
  const { loginInWithGoogle, createAccountWithEmailAndPassword } = useFirebase();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleEmail = (event) =>{
    setEmail(event.target.value);
  }
  const handlePassword = (event) =>{
    setPassword(event.target.value)
  }

  const handleRegisterForm = (event) => {
    event.preventDefault();
    console.log(email, password);
    createAccountWithEmailAndPassword(email, password);
  };
    return (
      <div className='text-white'>
        <Container>
          <div className='w-50 mx-auto p-3 rounded-3 border border-2'>
            <div className='text-center mb-3'>
              <p>Sign up with:</p>
              <button
                type='button'
                className='btn btn-danger ms-3'
                onClick={loginInWithGoogle}
              >
                Google
              </button>
            </div>

            <p className='text-center'>Or</p>
            <form onSubmit={handleRegisterForm}>
              {/* <!-- Name input --> */}
              <div className='form-outline mb-4'>
                <Form.Group className='mb-4 mx-5' controlId='formBasicEmail'>
                  <Row>
                    <Col lg={8} className='mx-auto'>
                      <Form.Control
                        type='text'
                        placeholder='Enter Name'
                        // required
                      />
                    </Col>
                  </Row>
                  <Form.Text className='text-muted'></Form.Text>
                </Form.Group>
              </div>

              {/* <!-- Username input --> */}
              <div className='form-outline mb-4'>
                <Form.Group className='mb-4 mx-5' controlId='formBasicEmail'>
                  <Row>
                    <Col lg={8} className='mx-auto'>
                      <Form.Control
                        type='text'
                        placeholder='User Name'
                        // required
                      />
                    </Col>
                  </Row>
                  <Form.Text className='text-muted'></Form.Text>
                </Form.Group>
              </div>

              {/* <!-- Email input --> */}
              <div className='form-outline mb-4'>
                <Form.Group className='mb-4 mx-5' controlId='formBasicEmail'>
                  <Row>
                    <Col lg={8} className='mx-auto'>
                      <Form.Control
                        type='email'
                        placeholder='Enter Email'
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
                <Form.Group className='mb-4 mx-5' controlId='formBasicEmail'>
                  <Row>
                    <Col lg={8} className='mx-auto'>
                      <Form.Control
                        type='password'
                        placeholder='Set Password'
                        required
                        onBlur={handlePassword}
                      />
                    </Col>
                  </Row>
                  <Form.Text className='text-muted'></Form.Text>
                </Form.Group>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div className='form-outline mb-4'>
                <Form.Group className='mb-4 mx-5' controlId='formBasicEmail'>
                  <Row>
                    <Col lg={8} className='mx-auto'>
                      <Form.Control
                        type='password'
                        placeholder='Repeat Password'
                        // required
                      />
                    </Col>
                  </Row>
                  <Form.Text className='text-muted'></Form.Text>
                </Form.Group>
              </div>
              {/* <!-- Submit button --> */}
              <button type='submit' className='btn btn-primary btn-block mb-4'>
                Register
              </button>
            </form>
            <div className='text-center'>
              <h6>
                Already have an account?{" "}
                <Link to={"/login"} className='fw-bold'>
                  Login
                </Link>
              </h6>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Register;