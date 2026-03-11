export  const ProjectsPage = () => {
  const projects = [
    {
      title: "Marketplace de servicios locales",
      description: "Aplicación full stack con React CRUD y node.js.",
      tech: ["React", "Tailwind CSS", "Consumo de Api", "Node.js" ],
      github: "https://github.com/KariannaPaola/Marketplace-Servicios-locales",
      demo: "https://marketplace-servicios-locales.vercel.app/",
      image: "/images/capture.jpeg"
    },
    {
      title: "App de clima",
      description: "Aplicación para determinar tu clima actual, y buscar el clima por zona",
      tech: ["React", "Consumo de Api", "Tailwind CSS", "Responsive Design" ],
      github: "https://github.com/KariannaPaola/App-clima",
      demo: "https://app-clima-puce.vercel.app/", 
      image: "/images/capture1.jpeg"
    },  {
      title: "APP Rick and Morty",
      description: "Aplicación utilizando la API de Rick and Morty",
      tech: ["Javascript", "Consumo de Api", "Tailwind CSS", "Responsive Design" ],
      github: "https://github.com/KariannaPaola/ProyectoFinalJS",
      demo: "https://kariannapaola.github.io/ProyectoFinalJS/",
      image: "/images/capture2.jpeg"
    },
    {
      title: "To-do-list",
      description: "Aplicación web de lista de tareas",
      tech: ["Javascript", "Tailwind CSS" ],
      github: "https://github.com/KariannaPaola/POE-TODOLIST",
      demo: "https://kariannapaola.github.io/POE-TODOLIST/",
      image: "/images/capture3.jpeg"
    }, {
      title: "Lista de contactos",
      description: "Aplicación web para buscar contactos",
      tech: ["Javascript", "Tailwind CSS" ],
      github: "https://github.com/KariannaPaola/Poe-lista-de-contactos",
      demo: "https://kariannapaola.github.io/Poe-lista-de-contactos/",
      image: "/images/capture4.jpeg"
    }
  ];

  return (
  <section
    id="proyectos"
    className="bg-slate-900 py-10 px-6"
  >
    <div className="max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center text-white mb-14">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 
            hover:shadow-lg hover:shadow-indigo-500/10 
            hover:-translate-y-1 transition-all duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <br />
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-gray-300 mb-6">
              <span className="font-semibold text-gray-200">
                Tecnologías:
              </span>{" "}
              {project.tech.join(", ")}
            </p>

            <div className="flex gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-medium transition"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium transition"
              >
                Demo
              </a>

            </div>
          </article>
        ))}

      </div>
    </div>
  </section>
);
};