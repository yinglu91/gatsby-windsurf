import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Site from './Site'

const SiteList = (props) => {
  const [sites, setSites] = useState([])
  const [sortedSites, setSortedSites] = useState([])

  useEffect(() => {
    setSites(props.sites.nodes)
    setSortedSites(props.sites.nodes)
  }, [])

  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {sortedSites.map((node) => (
          <Site key={node.id} site={node} />
        ))}
      </div>
    </section>
  )
}

export default SiteList
