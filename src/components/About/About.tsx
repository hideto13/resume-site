import { useResume } from '../../hooks/use-resume';
import { FaDownload } from 'react-icons/fa';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import styles from './About.module.scss';
const Fade = require('react-reveal/Fade');

function About() {
  const [resume] = useResume();
  const data = resume?.main;
  if (!data) return null;

  const profilepic = 'images/' + data.image;

  return (
    <section className={styles.about} id='about'>
      <Fade duration={1000}>
        <Container>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutImgContainer}>
              <img
                className={styles.aboutImg}
                src={profilepic}
                alt='Profile Pic'
              />
            </div>
            <div className={styles.aboutInfoContainer}>
              <h2 className={styles.aboutTitle}>About Me</h2>

              <p>{data.bio}</p>
              <div className={styles.aboutContacts}>
                <div className={styles.aboutDetails}>
                  <h2 className={styles.aboutTitle}>Contact Details</h2>
                  <p>
                    <span>{data.name}</span>
                    <br />
                    <span>
                      {data.address.street}
                      <br />
                      {data.address.city} {data.address.state}{' '}
                      {data.address.zip}
                    </span>
                    <br />
                    <span>{data.phone}</span>
                    <br />
                    <span>{data.email}</span>
                  </p>
                </div>
                <div className={styles.downloadButton}>
                  <p>
                    <Button href={data.resumedownload} color='dark'>
                      <FaDownload />
                      Download Resume
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  );
}

export default About;
