import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AboutUsPreview() {
  const navigate = useNavigate();
  
  return (
      <section className="about-section" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <img src="/background.jpg" alt="SMRC Dormotoryana" />
          </div>
          <div className="about-content">
            <span>ABOUT US</span>
            <h2>The History of SMRC/DORMITORYANA</h2>
            <p><strong>THE INCEPTION</strong></p><p>  Four decades ago, our father, Arch. Marcos C. de Guzman Sr., was encouraged  by a Director of Pacific 
Banking Corporation to invest in real estate across Maryknoll College in Loyola Heights, Quezon City.   
Visionary Pareng Vicente was instrumental in the challenge to build a home away from home for out-of
town students in college row, when most of the area was still covered with ‘talahib’. 
            </p>
            <button className="btn-primary"  onClick={() => navigate("/about")}>
              Discover More
            </button>
          </div>

        </div>

      </section>

  );
}