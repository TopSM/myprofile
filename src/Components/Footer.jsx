import React from 'react';
import SocialIconList from './SocialIconList';
function Footer({color}) {
    let footerClasses = "footer "

    footerClasses += color? "color-toggle-white":  "color-toggle-black"
    
    return (
        <div className={footerClasses} >
            <div>
                <p>
                    Site built and mainted by Ostavo Palacios &copy;2024 <br />
                    Last revised 11/23/2024
                </p>
                <SocialIconList/>
            </div>
            

        </div>
    );
}

export default Footer;