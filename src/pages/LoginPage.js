import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import {Link, Navigate, useNavigate } from "react-router-dom";


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
      <form>
        <p> <label> E-mail: <input type="text" name="email" onChange={handleEmailInput}/> </label> </p>
        <p> <label> Пароль: <input type="password" name="password" onChange={handlePasswordInput}/> </label> </p>
        <p> <input type="submit" onClick={signIn} value="Войти"/> </p>
      </form>

      <Nav.Link><Link to="/registration">У тебя ещё нет аккаунта? Нажми сюда.</Link></Nav.Link>
    </div>
  );
}