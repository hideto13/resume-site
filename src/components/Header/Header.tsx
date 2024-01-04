import { useResume } from '../../hooks/use-resume';
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Button } from '../Button/Button';
import styles from './Header.module.scss';
const ParticlesBg = require('particles-bg').default;
const Fade = require('react-reveal/Fade');

function Header() {
  const [resume] = useResume();
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
          <li className={styles.navItem}>
            <Link
              to='home'
              activeClass={styles.active}
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              to='about'
              activeClass={styles.active}
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              to='resume'
              activeClass={styles.active}
              spy={true}
              smooth={true}
              duration={500}
            >
              Resume
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              to='portfolio'
              activeClass={styles.active}
              spy={true}
              smooth={true}
              duration={500}
            >
              Works
            </Link>
          </li>

          {/* <li className={styles.navItem}>
           <Link
              to='contact'
              activeClass={styles.active}
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li> */}
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
        <Link
          to='about'
          spy={true}
          smooth={true}
          duration={500}
        >
          <FaArrowCircleDown className={styles.scrollIcon} size={'50px'} />
        </Link>
      </p>
    </header>
  );
}

export default Header;
