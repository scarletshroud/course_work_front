import React, {useState} from "react";
import {Form, Nav, Button} from "react-bootstrap";
import {Link, useNavigate } from "react-router-dom";
import '../css/Auth.css'

export default function RegisterPage(){
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loginState, setLoginState] = useState(null);
  const navigate = useNavigate();

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  async function signUp() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }

    fetch("http://localhost:8080/api/registration", requestOptions)
      .then(response => response.json())
      .then(loginState => setLoginState(loginState))
      .then( navigate("/login") );
  }

  return (
    <Form className="login-form">
      <h3>Sign Up</h3>
      <Form.Group className="mb-3"> 
        <Form.Label className="label">E-mail: </Form.Label> 
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailInput}/> 
      </Form.Group>

      <Form.Group className="mb-3"> 
        <Form.Label className="label">Пароль: </Form.Label>
        <Form.Control type="password" placeholder="Enter password" onChange={handlePasswordInput}/>
      </Form.Group>

      <Button type="submit" variant="primary" className="sign-up-button" onClick={signUp}>Зарегистрироваться</Button>
    </Form>
  );
}