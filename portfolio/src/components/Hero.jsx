const Hero = () => {
  return (
    <section className="bg-slate-900 py-32 px-6 flex justify-center">
  <div className="max-w-3xl text-center">

    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
      Hola, soy Karianna
    </h1>

    <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300">
      Desarrollador Web Junior
    </h2>

    <p className="mt-6 text-gray-400 leading-relaxed text-lg">
      Desarrollador Web full stack, especializado en React, Javascript y Node.js.
      Me enfoco en crear interfaces responsive, modernas, limpias y funcionales.
      Siempre dispuesta a seguir aprendiendo y crecer en el mundo del desarrollo web.
    </p>

    <div className="mt-10">
      <a
        href="https://github.com/KariannaPaola"
        target="_blank"
        rel="noreferrer"
        className="inline-block px-8 py-3 rounded-xl font-semibold text-white 
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
        hover:from-blue-600 hover:to-purple-600
        transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
      >
        Ver GitHub
      </a>
    </div>

  </div>
</section>
  );
};



export default Hero;