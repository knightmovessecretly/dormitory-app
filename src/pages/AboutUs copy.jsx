import { Link } from "react-router-dom";

export default function AboutUsPreview() {
  return (
      <section className="about-section" >
            <span>ABOUT US</span>
<div className="about-content"  style={{ marginLeft: "65px", marginRight: "45px" }}>
            <h2>The History of SMRC/DORMITORYANA</h2>
            <p><strong>THE INCEPTION</strong></p>
            <p>  Four decades ago, our father, Arch. Marcos C. de Guzman Sr., was encouraged  by a Director of Pacific 
Banking Corporation to invest in real estate across Maryknoll College in Loyola Heights, Quezon City.   
Visionary Pareng Vicente was instrumental in the challenge to build a home away from home for out-of
town students in college row, when most of the area was still covered with ‘talahib’. 
            </p>
          <p>Accepting the challenge to navigate the unknown was a big leap for Dad. Applying for a loan to purchase 
the property was even bigger since Dad did not like owing money and living beyond his means.  No guts 
no glory as some would say. He took the bank’s offer and paid off the loan as soon as he could. 
          </p>
            <p><strong>THE PROTOTYPE </strong></p>
            <p>The initial concept was patterned after the University of the Philippines’ International House in Diliman. 
With the assistance of cousin, Banjing, who was staying in Sampaguita Hall that time, Dad was able to 
observe campus dormitory living first hand.</p>
<p>SMRC started as a board and lodging facility for male and female international students.  Dad chose to 
name his company St. Mark, his namesake.  Home cooked meals were prepared by Tia During; Aling Luz 
and ladies of Marytown offered  laundry service.  Dad soon realized that managing a co-ed dormitory 
was quite taxing.  Simplifying paved the way to the first off-campus, all-women dormitory in the area.  
Dormitoryana was the only one of its kind in a garden setting with rooms named after flowers from A to 
Z.</p>
   <div className="image-wrapper">
    <img src="/about/about1.png"  />
    <img src="/about/about2.png"  />
    <img src="/about/about3.png"  />
  </div>
    <p>In keeping with the small office-home office (SO-HO) concept, the commercial section along B. Gonzales  
St. and Katipunan Ave. was a simple one-story with  mezzanine,  where earlier tenants ran their 
businesses on the ground floor and lived in the mezzanine. The two-story, 20-room dormitory lined the 
back of the property.  I still relish my hands-on experience of mixing concrete for the columns and I 
continue to take pride in planting the Narra and Mango trees which stand tall to this day. 
    </p>
   <p><strong>THE LEGACY </strong></p>
   <p>Greatly admired for their hard work, religious values, compassion and care for the residents,  Dad and 
Mama made their lasting mark in SMRC/ Dormitoryana.  The structure rose to five storeys as the 
business grew. The courtyard garden showcases Dad’s sculptures now.  His architecture remains 
timeless and his spirit lives on in his designs </p>
   <div className="image-wrapper">
    <img src="/about/about4.png"  />
    <img src="/about/about5.png"  />
    <img src="/about/about6.png"  />
  </div>
   <div className="image-wrapper">
    <img src="/about/about7.png"  />
  </div>
<p>And like many other endeavors to which families become committed to, what evolved into SMRC/ 
Dormitoryana today is what we - Priscilla, Jonelle, Cristina, Ramon, Marcos Jr. and Emmanuel - aim to 
sustain.  It is our beloved parents, Marcos and Gloria de Guzman’s, gift  to us and their legacy for future 
generations to come.  
</p>

<p>We share these with you - our staff, employees and consultants. </p>

<p>Jonelle R. de Guzman  11-15-18 </p>
</div>


<div className="flex flex-wrap justify-center gap-4 bg-transparent p-6 rounded-3xl">
  {["Safe", "Cozy", "Affordable", "Exclusive"].map((item) => (
    <span
      key={item}
      className="
        relative overflow-hidden
        px-6 py-3

        rounded-full
        border border-[#bb0303]/50

        bg-[#bb0303]/10
        backdrop-blur-xl

        text-[#ffe5e5]
        font-semibold
        tracking-wide

        shadow-lg shadow-[#bb0303]/20

        transition-all duration-500 ease-out
        cursor-pointer

        hover:scale-110
        hover:-translate-y-1
        hover:bg-[#bb0303]/20
        hover:border-[#ff4d4d]
        hover:shadow-[0_0_25px_rgba(187,3,3,0.6)]

        active:scale-95

        before:absolute
        before:inset-0
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/20
        before:to-transparent
        before:-translate-x-[200%]
        before:transition-transform
        before:duration-1000

        hover:before:translate-x-[200%]
      "
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="text-[#ff6b6b]">✦</span>
        {item}
      </span>
    </span>
  ))}
</div>

 </section>
 );
}