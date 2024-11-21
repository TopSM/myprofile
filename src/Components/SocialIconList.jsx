import React from 'react'
import { SocialIcon } from "react-social-icons"

function SocialIconList() {
  return (
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
  )
}

export default SocialIconList