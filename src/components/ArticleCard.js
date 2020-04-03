import React from "react"

import "../styles/ArticleCard.scss"

function ArticleCard({ img, author, title, desc }) {
  return (
    <div className="articleCard">
      <div className="articleCard__img">
        <img src={img} alt="card-pict" />
      </div>
      <div className="articleCard__details">
        <small className="articleCard__author">By {author}</small>
        <span className="articleCard__title">{title}</span>
        <p className="articleCard__desc">{desc}</p>
      </div>
    </div>
  )
}

export default ArticleCard
