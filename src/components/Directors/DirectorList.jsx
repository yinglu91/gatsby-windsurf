import React from 'react'
import styles from '../../css/items.module.css'
import Director from './Director'

const DirectorList = (props) => {
  const sortedDirectors = props.directors.nodes

  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {sortedDirectors.map((node) => (
          <Director key={node.id} director={node} />
        ))}
      </div>
    </section>
  )
}

export default DirectorList
