import { useResume } from '../../hooks/use-resume';
import { Container } from '../Container/Container';
import { usePreview } from '../../hooks/use-preview';
import styles from './Portfolio.module.scss';
const Fade = require('react-reveal/Fade');

let id = 0;
function Portfolio() {
  const [resume] = useResume();
  const data = resume?.portfolio;
  const urls = data?.projects.map((project) => project.url) || [];
  const [preview] = usePreview(urls);

  if (!data) return null;

  const projects = data.projects.map(function (projects) {
    let projectImage = 'images/' + projects.image;
    const currentPreview = preview?.find((p) => p.title === projects.title);

    return (
      <a
        key={id++}
        className={styles.portfolioItem}
        href={projects.url}
        target='_blank'
      >
        <img
          alt={projects.title}
          src={currentPreview?.image || projectImage}
          className={styles.portfolioImg}
        />
        <div className={styles.portfolioItemText}>{projects.title}</div>
      </a>
    );
  });

  return (
    <section id='portfolio' className={styles.portfolio}>
      <Fade left duration={1000} distance='40px'>
        <Container>
          <div className='twelve columns collapsed'>
            <h1 className={styles.portfolioTitle}>
              Check Out Some of My Works.
            </h1>
            <div id='portfolio-wrapper' className={styles.portfolioTable}>
              {projects}
            </div>
          </div>
        </Container>
      </Fade>
    </section>
  );
}

export default Portfolio;
