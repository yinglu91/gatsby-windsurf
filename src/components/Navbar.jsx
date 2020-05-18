import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo2.jpg'
import Title from './Title'
import styled from 'styled-components'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={logo} alt="NJWWA logo" />
              <span
                style={{
                  color: '#3fd0d4',
                  fontSize: '2.3rem',
                  marginLeft: '0.5rem',
                }}
              >
                NJWWA
              </span>
            </div>
          </AniLink>

          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        {/* internal links use Link component */}
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <AniLink fade to={item.path} activeStyle={{ color: '#3fd0d4' }}>
                {item.text}
              </AniLink>
            </li>
          ))}
        </ul>

        {/* external links use a tag */}
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

const imgDiv = styled.div`
  text-transform: lowercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  color: var(--primaryColor);
`
