import { FaCalendarAlt } from "react-icons/fa";
import "./Qualification.scss";

export const Qualification = () => {
  return (
    <section className="qualification section">
      <div className="qualification__sections">
        <div className="qualification__data">
          <div>
            <span className="qualification__rounder"></span>
            <div className="qualification__line"></div>
          </div>
          <div>
            <h3 className="qualification__title">Capacitacion</h3>
            <span className="qualification__subtitle">Flexxus - Córdoba, Argentina</span>
            <div className="qualification__calendar">
              <FaCalendarAlt /> 2020 - 2021
            </div>
          </div>
        </div>

        <div className="qualification__data">
          <div>
            <span className="qualification__rounder"></span>
            <div className="qualification__line"></div>
          </div>
          <div>
            <h3 className="qualification__title">Capacitacion</h3>
            <span className="qualification__subtitle">Dicsys - Córdoba, Argentina</span>
            <div className="qualification__calendar">
              <FaCalendarAlt /> 2020 - 2021
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
