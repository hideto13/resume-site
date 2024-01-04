import { useResume } from '../../hooks/use-resume';
import { Container } from '../Container/Container';
import styles from './Resume.module.scss';
const Slide = require('react-reveal/Slide');

function Resume() {
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [resume, { status, error }] = useResume();
  const data = resume?.resume;
  if (!data) return null;

  const education = data.education.map(function (education) {
    return (
      <div key={education.school}>
        <h3 className={styles.resumeSubtitle}>{education.school}</h3>
        <p className={styles.resumeInfo}>
          {education.degree} <span>&bull;</span>
          <em className='date'>{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });

  const work = data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3 className={styles.resumeSubtitle}>{work.company}</h3>
        <p className={styles.resumeInfo}>
          {work.title}
          <span>&bull;</span> <em className='date'>{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  const skills = data.skills.map((skills) => {
    const backgroundColor = getRandomColor();
    const className = 'bar-expand ' + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name} className={styles.resumeSkillBar}>
        <span
          style={{ width, backgroundColor }}
          className={styles.resumeSkillBarScale}
        ></span>
        <em className={styles.resumeSkillTitle}>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id='resume' className={styles.resume}>
      <Container>
        <Slide left duration={1300}>
          <div className={styles.resumeContainer}>
            <div className={styles.resumeTitleContainer}>
              <h1 className={styles.resumeTitle}>
                <span>Education</span>
              </h1>
            </div>

            <div className={styles.resumeDescriptionContainer}>
              <div className='row item'>
                <div className='twelve columns'>{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className={styles.resumeContainer}>
            <div className={styles.resumeTitleContainer}>
              <h1 className={styles.resumeTitle}>
                <span>Work</span>
              </h1>
            </div>

            <div className={styles.resumeDescriptionContainer}>{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className={styles.resumeContainer}>
            <div className={styles.resumeTitleContainer}>
              <h1 className={styles.resumeTitle}>
                <span>Skills</span>
              </h1>
            </div>

            <div className={styles.resumeDescriptionContainer}>
              <p>{data.skillmessage}</p>
              <ul className={styles.resumeSkills}>{skills}</ul>
            </div>
          </div>
        </Slide>
      </Container>
    </section>
  );
}

export default Resume;
