const Technologies = () => {
  const techs = [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "React",
    "Git",
    "API REST",
    "Node.js",
    "PHP",
    "SQL",
    "NoSQL"
  ];

 return (
  <section id="tecnologias" className="bg-slate-900 py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">

      <h2 className="text-4xl font-bold text-white mb-12">
        Tecnologías
      </h2>

      <ul className="flex flex-wrap justify-center gap-4">

        {techs.map((tech) => (
          <li
            key={tech}
            className="px-5 py-2 rounded-lg 
            bg-slate-800 border border-slate-700
            text-gray-300 font-medium
            hover:bg-slate-700 hover:border-indigo-500
            hover:text-white
            transition duration-300"
          >
            {tech}
          </li>
        ))}

      </ul>

    </div>
  </section>
);
};


export default Technologies;