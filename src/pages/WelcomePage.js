import React from "react";

class WelcomePage extends React.Component {
    render () {
        return (
            <div>
                <div className="header">
                    <text>
                        Добро Пожаловать! Осталось всего несколько шагов!
                    </text>
                </div>
                <form onSubmit={this.onSubmit}>
                <p><label> Ваш никнейм: <input type="text" name="username"/> </label></p>
                <p> 
                    <label>Salary:</label>
                    <select name="salary" className="sportSelector">
                        <option value="">Please select salary</option>
                        <option value="skateboarding">Скейтбординг</option>
                        <option value="scooter">Самокат</option>
                        <option value="bmx">БМХ</option>
                    </select>
                </p>
                <p><input type="submit" value="Дальше!" /></p>
                </form>
            </div>
        );
    }
}