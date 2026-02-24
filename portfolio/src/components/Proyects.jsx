const Projects = () => {
  const projects = [
    {
      title: "App de Tareas",
      description: "Aplicación CRUD con React y API REST.",
      tech: ["React", "CSS", "API"],
      github: "https://github.com/TU_GITHUB/todo-app",
      demo: "https://tudemo.vercel.app"
    },
    {
      title: "Dashboard",
      description: "Panel con gráficos y datos dinámicos.",
      tech: ["React", "Charts"],
      github: "https://github.com/TU_GITHUB/dashboard",
      demo: "https://tudemo2.vercel.app"
    }
  ];

  return (
    <section id="proyectos" style={styles.section}>
      <h2>Proyectos</h2>

      {projects.map((project) => (
        <article key={project.title} style={styles.card}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <p>
            <strong>Tecnologías:</strong>{" "}
            {project.tech.join(", ")}
          </p>

          <a href={project.github} target="_blank">GitHub</a>{" | "}
          <a href={project.demo} target="_blank">Demo</a>
        </article>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto"
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    marginBottom: "20px"
  }
};

export default Projects;