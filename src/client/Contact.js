import React from "react";
import '../css/Contact.css'

function Contact() {
    return(
        <div className="contact_background" >
            <h1 className="contact_h1">Contact</h1>
            <div className="contact_elements">
            <div className="contact_naver">
                <a href="mailto:kingksy777@naver.com"
                style={{textDecoration: 'none'}}>
                <h1 className="contact_info">📧</h1>
                </a>
            </div>
            <div className="contact_tel">
            <a href="tel:+8201029439860"
            style={{textDecoration: 'none'}}>
                    <h1 className="contact_info">📱</h1>
                </a>
            </div>
            </div>
        </div>
    );
}

export default Contact;