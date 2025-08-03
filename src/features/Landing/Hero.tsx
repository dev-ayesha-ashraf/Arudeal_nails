export default function Hero() {
  return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between bg-pink-50 min-h-screen pt-20 px-4 md:px-6 py-10 md:py-12">

      {/* Left Column */}
      <div className="md:w-1/2 text-left">
        <p className="text-pink-500 font-semibold tracking-wider uppercase text-sm md:text-base mb-2">
          Nailed to Perfection
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-snug md:leading-tight mb-4 md:mb-6">
          Nails That <br /> Define You
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
          Whether you're after bold, minimalist, or glam, we’ve got you covered with stunning designs, pro-quality products, and services that keep your nails looking flawless.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 text-sm sm:text-base bg-pink-500 text-white font-semibold rounded">
            Discover More
          </button>
          <button className="px-5 py-2.5 text-sm sm:text-base bg-pink-300 text-white font-semibold rounded">
            Book Now
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="/images/banner.png"
          alt="Manicured Nails"
          className="w-2/3 md:w-full max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
}
