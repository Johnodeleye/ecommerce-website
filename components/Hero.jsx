const Hero = () => {
    return (
<section className="text-white bg-gray-900">
  <div className="max-w-screen-xl px-4 py-24 mx-auto lg:flex lg:h-screen lg:items-center">
    <div className="max-w-3xl mx-auto text-center">
      <h1
        className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text sm:text-5xl"
      >
        Perspicacious MarketPlace.

        <span className="sm:block"> Access Free Source Code & Videos </span>
      </h1>

      <p className="max-w-xl mx-auto mt-4 sm:text-xl/relaxed">
        Now get free source code and shorts Videos about Tech with membership 
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    )
}

export default Hero