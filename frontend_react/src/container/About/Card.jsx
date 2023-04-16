import { images } from "../../constants";
import "./Card.scss";

export const Card = () => {
  return (
    <div className="app__card">
      <div className="app__lines"></div>
      <div className="app_imgBx">
        <img src={images.about01} />
      </div>
      <div className="app_content">
        <div className="app_content-details">
        <h2>Desing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi
          excepturi ad
        </p>
        <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
};
