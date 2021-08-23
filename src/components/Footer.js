import logo from '../img/Logo.png';
const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} width='40' height='40' alt='' />
      <h2 className=''>Big News</h2>
      <div className='icons'>
        <ul>
          <li>
            <a href='https://www.twitter.com/'>
              <i className='fa fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/'>
              <i className='fa fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/'>
              <i className='fa fa-youtube-play'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/'>
              <i className='fa fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
      <div className='contact-info'>
        <p>
          We at Big News like to hear from you if any problems arise:
          02929299292
        </p>
        <p>&copy;2021 WasnaaRaafat.com</p>
      </div>
    </div>
  );
};

export default Footer;
