import { useResume } from '../../hooks/use-resume';
import { IoArrowDownCircleSharp } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { Button } from '../Button/Button';
import styles from './Header.module.scss';
const ParticlesBg = require('particles-bg').default;
const Fade = require('react-reveal/Fade');

function Header() {
  const [resume, { status, error }] = useResume();
  const data = resume?.main;
  if (!data) return null;

  return (
    <header id='home' className={styles.header}>
      <ParticlesBg type='cobweb' bg={true} />

      <nav id='nav-wrap' className={styles.navigation}>
        <a
          className={styles.mobileBtn}
          href='#nav-wrap'
          title='Show navigation'
        >
          Show navigation
        </a>
        <a className={styles.mobileBtn} href='#home' title='Hide navigation'>
          Hide navigation
        </a>

        <ul id='nav' className={styles.navList}>
          <li className='current'>
            <a className={styles.navItem} href='#home'>
              Home
            </a>
          </li>

          <li>
            <a className={styles.navItem} href='#about'>
              About
            </a>
          </li>

          <li>
            <a className={styles.navItem} href='#resume'>
              Resume
            </a>
          </li>

          <li>
            <a className={styles.navItem} href='#portfolio'>
              Works
            </a>
          </li>

          <li>
            <a className={styles.navItem} href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.banner}>
        <div className={styles.bannerWrapper}>
          <Fade bottom>
            <h1 className={styles.bannerTitle}>{data.name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3 className={styles.bannerText}>{data.description}.</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className={styles.social}>
              <Button href={data.project}>
                <FaBook />
                Project
              </Button>
              <Button href={data.github} color='dark'>
                <FaGithub />
                Github
              </Button>
            </ul>
          </Fade>
        </div>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <IoArrowDownCircleSharp className={styles.scrollIcon} size={'60px'} />
        </a>
      </p>
    </header>
  );
}

export default Header;
