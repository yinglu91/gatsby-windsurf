import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Blog from './Blog'

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([])
  const [sortedBlogs, setSortedBlogs] = useState([])

  useEffect(() => {
    setBlogs(props.blogs.nodes)
    setSortedBlogs(props.blogs.nodes)
  }, [])

  return (
    <section className={styles.tours}>
      <div className={styles.center}>
        {sortedBlogs.map((node) => (
          <Blog key={node.id} blog={node} />
        ))}
      </div>
    </section>
  )
}

export default BlogList
