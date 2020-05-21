import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'

const About = () => {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutInfo}>
          <h4>Board of Trustees</h4>
          <ul>
            <li>Alasdair Gilfillan - Founder</li>
            <li>Wallace DaPron - President & Founder</li>

            <li>Thomas Latham - Founder</li>
            <li>Brian Rauch - Founder</li>
            <li>Paul Smith - Founder</li>
          </ul>
        </article>

        <article className={styles.aboutInfo}>
          <h4>Windsurfing New Jersey Board of Directors</h4>
          <ul>
            <li>President- Jeffrey Bauer</li>
            <li>Vice President- Allen Schultz</li>
            <li>Secretary- Jean Luc Peyrot</li>
            <li>Treasurer- William DeStefano</li>
            <li>LBI Event Chair- Jacek Polubiec</li>
            <li>Lakes Bay Event Chair- Brian Rauch</li>
            <li>Sandy Hook Event Chair- Marah Shiels</li>
            <li>Barnegat Event Chair-Antoni Dabrowski</li>
            <li>Membership Chair- Eileen Pfafman</li>
          </ul>
        </article>
        {/* <article className={styles.aboutInfo}>
          <h4>Board of Trustees</h4>
          <ul>
            <li>Alasdair Gilfillan - Founder</li>
            <li>Wallace DaPron - President & Founder</li>

            <li>Thomas Latham - Founder</li>
            <li>Brian Rauch - Founder</li>
            <li>Paul Smith - Founder</li>
          </ul>
        </article> */}
      </div>
    </section>
  )
}

export default About
