import React from "react"
import "../styles/Hero.scss"

import background from "../assets/bg-intro-desktop.svg"
import phones from "../assets/image-mockups.png"

import Button from "./Button"

function Hero() {
  return (
    <header className="hero">
      <img src={background} alt="bg" className="hero__bg" />
      <div className="hero__left">
        <h1 className="hero__title">
          Next generation <br /> digital banking
        </h1>
        <p className="hero__desc">
          Take your financial life online. Your Easybank account <br /> will be
          a one-stop-shop for spending, saving, <br /> budgeting, investing, and
          much more.
        </p>
        <Button text="Request Invite" />
      </div>
      <div className="hero__right">
        <img src={phones} alt="phones" className="hero__phones" />
      </div>
    </header>
  )
}

export default Hero
