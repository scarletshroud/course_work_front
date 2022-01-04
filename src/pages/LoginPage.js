import React from "react";

class LoginPage extends React.Component {
    render () {
        return (
            <form onSubmit={this.onSubmit}>
              <p><label> E-mail: <input type="text" name="email"/> </label></p>
              <p><label> Пароль: <input type="password" name="password"/> </label></p>
              <p><input type="submit" value="Войти" /></p>
            </form>
        );
    }
}