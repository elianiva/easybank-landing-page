import React from "react"
import "../styles/Footer.scss"
import logoAlt from "../assets/logo-alt.svg"

import Button from "./Button"

import { ReactComponent as Facebook } from "../assets/icon-facebook.svg"
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg"
import { ReactComponent as Youtube } from "../assets/icon-youtube.svg"
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg"
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__contacts">
          <img src={logoAlt} alt="easybank-logo" />
          <div className="footer__social">
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </div>
        <div className="footer__items">
          {/* Using <span> because no need of react router since it's not a multipage site */}
          <div className="item1">
            <span>About Us</span>
            <span>Contact</span>
            <span>Blog</span>
          </div>
          <div className="item2">
            <span>Careers</span>
            <span>Support</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="footer__button">
          <Button text="Request Invite" />
          <span> &copy; Easybank. All Rights Reserved</span>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          className="link"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://irrellia.github.io" className="link">
          irrellia
        </a>
        .
      </div>
    </footer>
  )
}

export default Footer
