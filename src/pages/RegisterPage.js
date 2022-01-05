import React, {useState} from "react";

export default function RegisterPage(){
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loginState, setLoginState] = useState(null);

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

    const resp = await fetch("http://localhost:8080/api/registration", requestOptions);
    const data = await resp.json();
    //TODO: valid or invalid login
  }

  return (
    <form onSubmit={signUp}>
      <p>
        <label> E-mail: <input type="text" name="email" onChange={handleEmailInput}/> </label>
      </p>
      <p>
        <label> Пароль: <input type="password" name="password" onChange={handlePasswordInput}/> </label>
      </p>
      <p><input type="submit" value="Зарегистрироваться"/></p>
    </form>
  );
}