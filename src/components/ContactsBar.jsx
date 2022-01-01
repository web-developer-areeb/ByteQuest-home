import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


import '../CSS/contactsBar.css'

const ContactsBar = () => {
    return (
        <div className="contacts">
            <div className="contacts__info contacts__email">
                <FontAwesomeIcon className="icon icon__email" icon={faEnvelope} />
                <p>info@bytequests.com</p>
            </div>
            <div className="contacts__info contacts__phone">
                <FontAwesomeIcon className="icon icon__phone" icon={faPhone} />
                <p>+91 9711999770, +1833-880-3355</p>
            </div>
        </div>
    );
};

export default ContactsBar;