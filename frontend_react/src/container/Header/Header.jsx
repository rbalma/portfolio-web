import { FaRegFileAlt } from "react-icons/fa";
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { SocialMedia } from "../../components";
import CV from '../../assets/Rodrigo Balmaceda - CV.pdf';

import './Header.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='home-user_info'>
        <span>Hola, soy</span>
        <h1>Rodrigo Balmaceda</h1>
        <div className="home-user_subtitle"><span>Desarrollador Web</span></div>
        <SocialMedia />
        <a className="home-cv_link" download="" href={CV}>Descargar CV</a>
      </div>

      <div className="container-image">
          <img src={images.profileFace} alt="profile_user" />
          <img src={images.flutter} alt="flutter" />
          <img src={images.sass} alt="sass" />
          <img src={images.redux} alt="redux" />
      </div>
    </div>
  )
}

export default AppWrap(Header, 'home');