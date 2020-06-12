import React from "react"
import styles from "../../css/items.module.css"
import Newsletter from "./Newsletter"

const NewsletterList = props => {
  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {props.newsLetters.nodes.map(node => (
          <Newsletter key={node.id} newsLetter={node} />
        ))}
      </div>
    </section>
  )

  return <Newsletter />
}

export default NewsletterList
