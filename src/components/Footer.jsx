import React from 'react'
import { Link } from 'gatsby'
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => (
          <Link key={index} to={item.path} activeStyle={{ color: '#3fd0d4' }}>
            {item.text}
          </Link>
        ))}
      </div>

      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>

      <div className={styles.copyright}>
        copyright &copy; NJ Windsurf Watersport Association
        {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
