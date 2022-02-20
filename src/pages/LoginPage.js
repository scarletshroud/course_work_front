import React, {useState} from "react";
import {Form, Nav, Button} from "react-bootstrap";
import {Link, useNavigate } from "react-router-dom";
import '../css/Auth.css'


export default function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [authed, setLoginState] = useState(null);
  const navigate = useNavigate();

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function signIn(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }

    fetch("http://localhost:8080/api/login", requestOptions)
      .then(response => response.json())
      .then((data) => localStorage.setItem('userToken', data.token))
      .then(loginState => setLoginState(loginState))
      .then( navigate("/home") );
  }

  function logout() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userToken: localStorage.getItem('userToken')})
    }

    fetch("http://localhost:8080/api/logout", requestOptions)
      .then(response => response.json())
      .then(localStorage.removeItem('userToken'))
      .then( navigate("/login") );
  }

  return (
    <div>
      <Form className="login-form">
        <h3>Sign In</h3>
        <Form.Group className="mb-3"> 
          <Form.Label className="label">E-mail: </Form.Label> 
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailInput}/> 
        </Form.Group>

        <Form.Group className="mb-3"> 
          <Form.Label className="labell">Password: </Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={handlePasswordInput}/>
        </Form.Group>

        <Button type="submit" variant="primary" onClick={signIn}>Sign In</Button>
        <Nav.Link className="sign-up-ref"><Link to="/registration">Don't have an account? Click here.</Link></Nav.Link>
      </Form>
    </div>
  );
}