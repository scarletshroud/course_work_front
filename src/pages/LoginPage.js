import React, {useState} from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loginState, setLoginState] = useState(null);

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function signIn() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    }

    fetch("http://localhost:8080/api/login", requestOptions)
      .then(response => response.json())
      .then(loginState => setLoginState(loginState));
  }

  return (
    <div>
      Email: {email} <br/>
      Password: {password}
      <form onSubmit={signIn}>
        <p>
          <label> E-mail: <input type="text" name="email" onChange={handleEmailInput}/></label>
        </p>
        <p>
          <label> Пароль: <input type="password" name="password" onChange={handlePasswordInput}/> </label>
        </p>
        <p>
          <input type="submit" value="Войти"/>
        </p>
      </form>

      <Nav.Link><Link to="/registration">У тебя ещё нет аккаунта? Нажми сюда.</Link></Nav.Link>
    </div>
  );
}