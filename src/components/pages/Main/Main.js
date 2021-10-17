import React, {useState} from "react";
import PropTypes from 'prop-types';
import avatar from "../../../content/images/avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import "./Main.scss";

function Main({toAbout}) {
    const [hasAvatarLoad, setHasAvatarLoad] = useState(false);

    return (
        <section className="main">
            <div className="main__content">
                <div className="main__avatar_wrapper">
                    <img src={avatar} className="main__avatar" onLoad={() => setHasAvatarLoad(true)}/>
                    {!hasAvatarLoad && <Preloader/>}
                </div>
                <h1 className="main__name">Сергей Лебидко</h1>
                <h3 className="main__profession">React-разработчик</h3>
                <button className="button main__more_button" onClick={toAbout}>Узнать больше</button>
            </div>
        </section>
    );
}

Main.propTypes = {
    toAbout: PropTypes.func
}

export default Main;