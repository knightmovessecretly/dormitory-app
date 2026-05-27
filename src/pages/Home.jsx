import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
     <PageTransition>
    <div className="space-y-12">

      {/* HERO */}
      <section className="bg-blue-600 text-white rounded-2xl py-16 px-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Find Your Perfect Dorm Room
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
          Safe, affordable, and comfortable living spaces
        </p>

        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
          Explore Rooms
        </button>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          ["🛏️", "Comfortable Rooms"],
          ["🔒", "Secure Environment"],
          ["📶", "Fast Internet"],
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="text-3xl">{item[0]}</div>
            <h3 className="font-semibold mt-2">{item[1]}</h3>
          </div>
        ))}
      </section>
    </div>
    </PageTransition>
  );
}