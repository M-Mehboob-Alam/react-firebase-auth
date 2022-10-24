import React, { useEffect, useState } from 'react'
import {useAuthState}  from 'react-firebase-hooks/auth'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth, loginWithEmailAndPassword } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const registerHandler = (e)=>{
    e.preventDefault();
    const navigate = useNavigate;
    console.log(email, password);
    loginWithEmailAndPassword(email, password);
  }
  useEffect(()=>{
    if(loading){
      return
    }
    if(user){
      console.log(user);
      navigate('/home');
    }
  },[user, loading]);
  return (
    <Form className='container' onSubmit={registerHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Login