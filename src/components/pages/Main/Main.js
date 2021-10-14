import React from "react";
import avatar from "../../../content/avatar.jpg";
import "./Main.scss";

function Main() {
    return (
        <div className="main">
            <div className="main__content">
                <div className="main__avatar_wrapper">
                    <img src={avatar} className="main__avatar"/>
                </div>
                <h1 className="main__name">Сергей Лебидко</h1>
                <h3 className="main__profession">React-разработчик</h3>
                <button className="button main__more_button">Узнать больше</button>
            </div>
        </div>
    );
}

export default Main;