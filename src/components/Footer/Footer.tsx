import { useResume } from '../../hooks/use-resume';
import { Container } from '../Container/Container';
import { FaGithub } from 'react-icons/fa';
import { FaArrowCircleUp } from 'react-icons/fa';
import styles from './Footer.module.scss';
const Fade = require('react-reveal/Fade');

function Footer() {
  const [resume] = useResume();
  const data = resume?.main;
  if (!data) return null;

  const date = new Date();

  const networks = data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url} target='_blank' rel='noreferrer'>
          {network.name === 'github' && (
            <FaGithub size={'30px'} className={styles.socialLink} />
          )}
        </a>
      </li>
    );
  });

  return (
    <footer className={styles.footer}>
      <Container>
        <Fade bottom>
          <ul className={styles.socialLinks}>{networks}</ul>

          <ul className={styles.copyright}>
            <li>&copy; Copyright {date.getFullYear()}</li>
          </ul>
        </Fade>

        <div id='go-top'>
          <a title='Back to Top' href='#home'>
            <FaArrowCircleUp className={styles.scrollIcon} size={'50px'} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
