import React from "react";
import "./Contacts.scss";
import {GITHUB_HREF, MAIL_HREF, TELEGRAM_HREF} from "../../../constants/settings";
import {ReactComponent as GuthubIcon} from "../../../content/icons/github.svg";
import {ReactComponent as MailIcon} from "../../../content/icons/mail.svg";
import {ReactComponent as TelegramIcon} from "../../../content/icons/telegram.svg";

function Contacts() {
    return (
        <ul className="contacts">
            <li>
                <a href={GITHUB_HREF} target="_blank" rel="noopener noreferrer">
                    <GuthubIcon className="contacts__github"/>
                </a>
            </li>
            <li>
                <a href={MAIL_HREF} target="_blank" rel="noopener noreferrer">
                    <MailIcon className="contacts__mail"/>
                </a>
            </li>
            <li>
                <a href={TELEGRAM_HREF} target="_blank" rel="noopener noreferrer">
                    <TelegramIcon className="contacts__telegram"/>
                </a>
            </li>
        </ul>
    );
}

export default Contacts;