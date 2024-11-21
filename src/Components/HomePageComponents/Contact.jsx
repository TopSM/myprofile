import React from 'react'

function Contact() {
  return (
    <div><React.Fragment>
    <AnimationOnScroll
      className="title-fitting contact-fitting"
      animateIn="animate__fadeInDown"
      animateOnce={true}
    >
      <h2 className="sections">Contact</h2>
      <div className="info-list title-fitting">
        <ul className="no-bullets">
          <li className="contact-list">
          </li>
          <li className="contact-list">
            <span className="contact-list-name">LinkedIn</span>:&ensp;
            <a href="https://www.linkedin.com/in/ostavo-palacios/">
              https://www.linkedin.com/ostavo-palacios/
            </a>
          </li>
          <li className="contact-list">
            <span className="contact-list-name">Email</span>:
            Ostavo.palacios@gmail.com
          </li>
        </ul>
      </div>
    </AnimationOnScroll>
  </React.Fragment>
</div>
  )
}

export default Contact