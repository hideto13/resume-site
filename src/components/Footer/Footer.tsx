import { useResume } from '../../hooks/use-resume';
const Fade = require('react-reveal/Fade');

function Footer() {
  const [resume, { status, error }] = useResume();
  const data = resume?.main;
  if (!data) return null;

  const networks = data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className='row'>
        <Fade bottom>
          <div className='twelve columns'>
            <ul className='social-links'>{networks}</ul>

            <ul className='copyright'>
              <li>&copy; Copyright 2021 Nordic Giant</li>
              <li>
                Design by{' '}
                <a title='Styleshout' href='http://www.styleshout.com/'>
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
        </Fade>

        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open'></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
