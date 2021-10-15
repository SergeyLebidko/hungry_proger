import React from "react";
import "./Contacts.scss";
import {GITHUB_HREF, MAIL_HREF, TELEGRAM_HREF} from "../../../constants/settings";
import {FaGithub, FaTelegram, MdEmail} from "react-icons/all";

function Contacts() {
    return (
        <ul className="contacts">
            <li>
                <a href={GITHUB_HREF} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="contacts__github"/>
                </a>
            </li>
            <li>
                <a href={MAIL_HREF} target="_blank" rel="noopener noreferrer">
                    <MdEmail className="contacts__mail"/>
                </a>
            </li>
            <li>
                <a href={TELEGRAM_HREF} target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="contacts__telegram"/>
                </a>
            </li>
        </ul>
    );
}

export default Contacts;