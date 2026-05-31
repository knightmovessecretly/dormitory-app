import { useNavigate } from "react-router-dom";
import "./AboutUsPreview.css";

export default function AboutUsPreview() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="about-section  py-12 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image */}
          <div>
            <img
              src="/hiway.jpg"
              alt="SMRC Dormitoryana"
              className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-blue-600 font-semibold tracking-wider uppercase">
              About Us
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              The History of SMRC / Dormitoryana
            </h2>

            <p className="mt-6 font-semibold text-gray-800">
              THE INCEPTION
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
              Four decades ago, our father, Arch. Marcos C. de Guzman Sr.,
              was encouraged by a Director of Pacific Banking Corporation to
              invest in real estate across Maryknoll College in Loyola Heights,
              Quezon City. Visionary Pareng Vicente was instrumental in the
              challenge to build a home away from home for out-of-town students
              in college row, when most of the area was still covered with
              "talahib".
            </p>

            <button
              onClick={() => navigate("/about")}
              className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Discover More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}