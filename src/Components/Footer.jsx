import React from 'react';
import { SocialIcon } from "react-social-icons"
function Footer() {
    return (
        <div className="footer" >
            <div>
                <p>
                    Site built and mainted by Ostavo Palacios &copy;2024 <br />
                    Last revised 9/27/2024
                </p>
            </div>
            <div className="social-icon-footer">
                <SocialIcon
                    url="https://www.linkedin.com/in/ostavo-palacios/"
                    className="social-icon"
                    bgColor=" #800000"
                />


                <SocialIcon
                    url="https://github.com/TopSM"
                    className="social-icon"
                    bgColor=" #800000"
                />
                <SocialIcon
                    url="https://www.instagram.com/albumpalace98/"
                    className="social-icon"
                    bgColor=" #800000"
                />
                <SocialIcon
                    url="https://mail.google.com/mail/?view=cm&source=mailto&to=Ostavo.palacios@gmail.com"
                    className="social-icon"
                    bgColor=" #800000"
                />
            </div>

        </div>
    );
}

export default Footer;