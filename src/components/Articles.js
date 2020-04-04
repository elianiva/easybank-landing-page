import React from "react"
import "../styles/Articles.scss"
import ArticleCard from "./ArticleCard"

import currency from "../assets/image-currency.jpg"
import plane from "../assets/image-plane.jpg"
import confetti from "../assets/image-confetti.jpg"
import restaurant from "../assets/image-restaurant.jpg"

function Articles() {
  return (
    <section className="article">
      <div className="article__wrapper">
        <div className="article__title">
          <h1>Latest Articles</h1>
        </div>
        <div className="article__cards">
          <ArticleCard
            img={currency}
            author="Claire Robinson"
            title="Receive money in any currency with no fees"
            desc="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
          />
          <ArticleCard
            img={restaurant}
            author="Wilson Hutton"
            title="Treat yourself without worrying about money"
            desc="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
          />
          <ArticleCard
            img={plane}
            author="Wilson Hutton"
            title="Take your Easybank card wherever you go"
            desc="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
          />
          <ArticleCard
            img={confetti}
            author="Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            desc="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
          />
        </div>
      </div>
    </section>
  )
}

export default Articles
