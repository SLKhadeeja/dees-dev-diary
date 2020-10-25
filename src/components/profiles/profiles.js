import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDev, faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./profiles.css";

const Profiles = ({ hide }) => {
    return (
        <div className="profiles-container">
            <div className="top">
                <p onClick={hide}><FontAwesomeIcon icon={faTimes} /></p>
            </div>
            <div className="list">
                <p className="list-item"><FontAwesomeIcon icon={faEnvelope} /> khadijaladan67@gmail.com</p>
                <div className="list-item">
                    <div className="icons">
                        <p><FontAwesomeIcon icon={faTwitter} /></p>
                        <p><FontAwesomeIcon icon={faGithub} /></p>
                        <p><FontAwesomeIcon icon={faMedium} /></p>
                        <p><FontAwesomeIcon icon={faDev} /></p>
                    </div>
                    @SLKhadeeja
                </div>
                <div className="list-item">
                    <div className="icons">
                    <p><FontAwesomeIcon icon={faLinkedin} /></p>
                    <p><FontAwesomeIcon icon={faFacebook} /></p>
                    </div>
                    Khadija Ladan
                </div>
                <p className="list-item"><FontAwesomeIcon icon={faInstagram} /> _deedee_l</p>
            </div>
        </div>
    )
}

export default Profiles;
