import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { auth, logout } from '../firebase/firebase';


const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Link to="/" className='text-decoration-none text-dark p-2'> <b>Firebase</b> </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to='/' className='text-decoration-none text-dark p-2'>Home</Link>
         {!user && <> <Link to="/login" className='text-decoration-none text-dark p-2'>Login</Link>
          <Link to="/register" className='text-decoration-none text-dark p-2'>Register </Link></>}
          {user &&           <Link onClick={logout} className='text-decoration-none text-dark p-2'>Logout </Link> }
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header