import React from "react"

import "../styles/BenefitCard.scss"

function BenefitCard({ img, title, desc }) {
  return (
    <div className="benefitCard">
      <div className="benefitCard__icon">
        <img src={img} alt="card-icon" />
      </div>
      <h2 className="benefitCard__title">{title}</h2>
      <p className="benefitCard__desc">{desc}</p>
    </div>
  )
}

export default BenefitCard
