import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.instagram.com/balmarodrigo"
      target="_blank"
      className="icon-instagram"
    >
      <BsInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/rodrigo-balmaceda-958466144"
      target="_blank"
      className="icon-linkedin"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://github.com/rbalma"
      target="_blank"
      className="icon-github"
    >
      <BsGithub />
    </a>
  </div>
);

export default SocialMedia;
