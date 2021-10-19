import React, {useState} from "react";
import PropTypes from 'prop-types';
import avatar from "../../../content/images/avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";
import {useAnimation} from "../../../utils/hooks";
import {MAIN_MODE} from "../../../constants/settings";
import "./Main.scss";

function Main({toAbout}) {
    const [hasAvatarLoad, setHasAvatarLoad] = useState(false);

    const avatarInline = useAnimation(MAIN_MODE, "avatar_rise", 500, 800);
    const nameInline = useAnimation(MAIN_MODE, "left_text_rise", 800, 800);
    const professionInline = useAnimation(MAIN_MODE, "right_text_rise", 1100, 800);
    const buttonInline = useAnimation(MAIN_MODE, "button_rise", 1700, 800);

    return (
        <section className="main">
            <div className="main__content">
                <div className="main__avatar_wrapper" style={avatarInline}>
                    <img src={avatar} className="main__avatar" onLoad={() => setHasAvatarLoad(true)}/>
                    {!hasAvatarLoad && <Preloader/>}
                </div>
                <h1 className="main__name" style={nameInline}>Сергей Лебидко</h1>
                <h3 className="main__profession" style={professionInline}>React-разработчик</h3>
                <button className="button main__more_button" onClick={toAbout} style={buttonInline}>
                    Узнать больше
                </button>
            </div>
        </section>
    );
}

Main.propTypes = {
    toAbout: PropTypes.func
}

export default Main;