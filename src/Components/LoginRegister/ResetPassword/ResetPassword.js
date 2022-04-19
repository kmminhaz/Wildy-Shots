import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import useFirebase from '../../Hooks/useFirebase';

const ResetPassword = () => {

    const { success, resetPassword } = useFirebase();
    const [email, setEmail] = useState([]);

    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }

    const handleResetPassword = (event) =>{
        event.preventDefault();
        resetPassword(email);
        
    }
    return (
      <div className='w-50 mx-auto'>
        <p className='text-success fw-bold'>{success}</p>
        <Form onSubmit={handleResetPassword}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' onBlur={handleEmail} />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Send Password Reset Mail
          </Button>
        </Form>
      </div>
    );
};

export default ResetPassword;