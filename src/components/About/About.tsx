import { useResume } from '../../hooks/use-resume';
import styles from './About.module.scss';
const Fade = require('react-reveal/Fade');

function About() {
  const [resume, { status, error }] = useResume();
  const data = resume?.main;
  if (!data) return null;

  const profilepic = 'images/' + data.image;

  return (
    <section className={styles.about}>
      <Fade duration={1000}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImgContainer}>
            <img
              className='profile-pic'
              src={profilepic}
              alt='Nordic Giant Profile Pic'
            />
          </div>
          <div className={styles.aboutInfoContainer}>
            <h2>About Me</h2>

            <p>{data.bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address'>
                  <span>{data.name}</span>
                  <br />
                  <span>
                    {data.address.street}
                    <br />
                    {data.address.city} {data.address.state}, {data.address.zip}
                  </span>
                  <br />
                  <span>{data.phone}</span>
                  <br />
                  <span>{data.email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a href={data.resumedownload} className='button'>
                    <i className='fa fa-download'></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
