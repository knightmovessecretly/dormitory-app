import PageTransition from "../components/PageTransition";
import "./Themes.css";

export default function Home() {
  const features = [
    {
      icon: "🛏️",
      title: "Comfortable Rooms",
      description:
        "Clean, comfortable, and affordable rooms designed for students.",
    },
    {
      icon: "🔒",
      title: "Secure Environment",
      description:
        "Feel safe with a secure and student-friendly living environment.",
    },
    {
      icon: "📶",
      title: "Fast Internet",
      description:
        "Stay connected with reliable and fast internet for your studies.",
    },
  ];

  return (
    <PageTransition>
      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
        <div className="w-full max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">

          {/* ================= HERO ================= */}
          <section
            className="
              bg-blue-600
              text-white
              rounded-xl
              sm:rounded-2xl
              px-5
              py-10
              sm:px-8
              sm:py-14
              md:px-12
              md:py-16
              lg:py-20
              text-center
              overflow-hidden
            "
          >
            <div className="max-w-3xl mx-auto">

              {/* Heading */}
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-bold
                  leading-tight
                "
              >
                Find Your Perfect Dorm Room
              </h1>

              {/* Description */}
              <p
                className="
                  mt-4
                  sm:mt-5
                  text-sm
                  sm:text-base
                  md:text-lg
                  lg:text-xl
                  text-white/90
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                "
              >
                Safe, affordable, and comfortable living spaces designed for
                students.
              </p>

              {/* Button */}
              <button
                type="button"
                className="
                  mt-6
                  sm:mt-8
                  w-full
                  sm:w-auto
                  min-h-[48px]
                  bg-white
                  text-blue-600
                  px-7
                  sm:px-8
                  py-3
                  sm:py-3.5
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  shadow-sm
                  hover:bg-blue-50
                  active:scale-95
                  transition
                  duration-200
                "
              >
                Explore Rooms
              </button>
            </div>
          </section>

          {/* ================= FEATURES ================= */}
          <section>
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
                sm:gap-5
                md:gap-6
              "
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    p-5
                    sm:p-6
                    md:p-7
                    rounded-xl
                    shadow-sm
                    hover:shadow-md
                    border
                    border-gray-100
                    transition
                    duration-200
                    text-center
                    sm:text-left
                  "
                >
                  {/* Icon */}
                  <div className="text-3xl sm:text-4xl">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      font-semibold
                      text-base
                      sm:text-lg
                      md:text-xl
                      mt-3
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-2
                      text-sm
                      sm:text-base
                      text-gray-500
                      leading-relaxed
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </PageTransition>
  );
}
    