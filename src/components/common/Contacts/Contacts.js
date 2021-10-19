import React from "react";
import {ABOUT_MODE, DEFAULT_ANIMATION_DELAY, GITHUB_HREF, MAIL_HREF, TELEGRAM_HREF} from "../../../constants/settings";
import {ReactComponent as GuthubIcon} from "../../../content/icons/github.svg";
import {ReactComponent as MailIcon} from "../../../content/icons/mail.svg";
import {ReactComponent as TelegramIcon} from "../../../content/icons/telegram.svg";

import {useAnimationList} from "../../../utils/hooks";
import "./Contacts.scss";

function Contacts() {
    const delays = [
        DEFAULT_ANIMATION_DELAY + 200,
        DEFAULT_ANIMATION_DELAY + 400,
        DEFAULT_ANIMATION_DELAY + 600
    ]
    const contactsInline = useAnimationList(ABOUT_MODE, "contact_rise", delays);

    return (
        <ul className="contacts">
            <li style={contactsInline[0]}>
                <a href={GITHUB_HREF} target="_blank" rel="noopener noreferrer">
                    <GuthubIcon className="contacts__github"/>
                </a>
            </li>
            <li style={contactsInline[1]}>
                <a href={MAIL_HREF} target="_blank" rel="noopener noreferrer">
                    <MailIcon className="contacts__mail"/>
                </a>
            </li>
            <li style={contactsInline[2]}>
                <a href={TELEGRAM_HREF} target="_blank" rel="noopener noreferrer">
                    <TelegramIcon className="contacts__telegram"/>
                </a>
            </li>
        </ul>
    );
}

export default Contacts;