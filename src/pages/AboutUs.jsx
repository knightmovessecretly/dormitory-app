import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUsPreview() {
  return (
<section className="about-section">
  <div className="about-container">

    <div className="section-header">
      <span className="section-tag">ABOUT US</span>
      <h2>The History of SMRC / Dormitoryana</h2>
    </div>

    <div className="history-block">
      <h3>THE INCEPTION</h3>

      <p>
        Four decades ago, our father, Arch. Marcos C. de Guzman Sr.,
        was encouraged by a Director of Pacific Banking Corporation to
        invest in real estate across Maryknoll College in Loyola Heights,
        Quezon City.
      </p>

      <p>
        Visionary Pareng Vicente was instrumental in the challenge to build
        a home away from home for out-of-town students in college row,
        when most of the area was still covered with talahib.
      </p>

      <p>
        Accepting the challenge to navigate the unknown was a big leap
        for Dad. Applying for a loan to purchase the property was even
        bigger since Dad did not like owing money and living beyond his means.
      </p>

      <p>
        “No guts, no glory,” as some would say. He took the bank’s offer
        and paid off the loan as soon as he could.
      </p>
    </div>

    <div className="history-block">
      <h3>THE PROTOTYPE</h3>

      <p>
        The initial concept was patterned after the University of the
        Philippines’ International House in Diliman.
      </p>

      <p>
        With the assistance of cousin Banjing, who was staying in
        Sampaguita Hall at the time, Dad was able to observe campus
        dormitory living firsthand.
      </p>

      <p>
        SMRC started as a board and lodging facility for male and female
        international students. Dad chose to name his company St. Mark,
        his namesake.
      </p>

      <p>
        Home-cooked meals were prepared by Tia During, while Aling Luz
        and the ladies of Marytown offered laundry services.
      </p>

      <p>
        Dad soon realized that managing a co-ed dormitory was quite
        taxing. Simplifying operations paved the way to the first
        off-campus, all-women dormitory in the area.
      </p>

      <p>
        Dormitoryana became known for its unique garden setting, with
        rooms named after flowers from A to Z.
      </p>

      <div className="image-grid">
        <img src="/about/about1.png" alt="Dormitory history 1" />
        <img src="/about/about2.png" alt="Dormitory history 2" />
        <img src="/about/about3.png" alt="Dormitory history 3" />
      </div>

      <p>
        In keeping with the small office-home office (SOHO) concept,
        the commercial section along B. Gonzales St. and Katipunan Ave.
        was designed as a simple one-story structure with a mezzanine.
      </p>

      <p>
        Earlier tenants operated businesses on the ground floor while
        residing in the mezzanine area.
      </p>

      <p>
        The two-story, 20-room dormitory lined the back of the property.
        We still cherish the hands-on experience of mixing concrete for
        the columns and planting the Narra and Mango trees that continue
        to stand tall today.
      </p>
    </div>

    <div className="history-block">
      <h3>THE LEGACY</h3>

      <p>
        Greatly admired for their hard work, religious values,
        compassion, and care for the residents, Dad and Mama made
        their lasting mark in SMRC / Dormitoryana.
      </p>

      <p>
        As the business grew, the structure rose to five storeys.
        The courtyard garden now showcases Dad’s sculptures, while
        his timeless architectural designs continue to inspire.
      </p>

      <div className="image-grid">
        <img src="/about/about4.png" alt="Legacy 1" />
        <img src="/about/about5.png" alt="Legacy 2" />
        <img src="/about/about6.png" alt="Legacy 3" />
      </div>

      <div className="single-image">
        <img src="/about/about7.png" alt="Dormitory legacy" />
      </div>

      <p>
        Today, SMRC / Dormitoryana continues through the dedication
        of Priscilla, Jonelle, Cristina, Ramon, Marcos Jr., and Emmanuel.
      </p>

      <p>
        It remains the beloved legacy of Marcos and Gloria de Guzman —
        a gift entrusted to future generations.
      </p>

      <p>
        We proudly share this legacy with our staff, employees,
        consultants, and the community we continue to serve.
      </p>

      <div className="signature">
        <p>Jonelle R. de Guzman</p>
        <span>11-15-18</span>
      </div>
    </div>

  </div>
</section>

 );
}