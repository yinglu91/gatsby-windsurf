import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Sponsor from './Sponsor'

const sponsorList = (props) => {
  const [sponsors, setSponsors] = useState([])
  const [sortedSponsors, setSortedSponsors] = useState([])

  useEffect(() => {
    setSponsors(props.sponsors.nodes)
    setSortedSponsors(props.sponsors.nodes)
  }, [])

  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {sortedSponsors.map((node) => (
          <Sponsor key={node.id} sponsor={node} />
        ))}
      </div>
    </section>
  )
}

export default sponsorList
