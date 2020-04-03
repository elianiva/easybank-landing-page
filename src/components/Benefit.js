import React from "react"

import "../styles/Benefit.scss"
import BenefitCard from "./BenefitCard"

import online from "../assets/icon-online.svg"
import budgeting from "../assets/icon-budgeting.svg"
import api from "../assets/icon-api.svg"
import onboarding from "../assets/icon-onboarding.svg"

function Benefit() {
  return (
    <section className="benefit">
      <h1 className="benefit__title">Why choose easybank?</h1>
      <p className="benefit__desc">
        We leverage Open Banking to turn your bank account into your financial
        hub.
        <br />
        Control your finances like never before.
      </p>
      <div className="benefit__cards">
        <BenefitCard
          img={online}
          title="Online Banking"
          desc="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />
        <BenefitCard
          img={budgeting}
          title="Simple Budgeting"
          desc="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        />
        <BenefitCard
          img={onboarding}
          title="Fast Onboarding"
          desc="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        />
        <BenefitCard
          img={api}
          title="Open API"
          desc="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        />
      </div>
    </section>
  )
}

export default Benefit
