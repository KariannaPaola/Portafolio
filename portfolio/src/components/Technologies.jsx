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
    <section id="tecnologias" style={styles.section}>
      <h2>Tecnologías</h2>
      <ul style={styles.list}>
        {techs.map((tech) => (
          <li key={tech} style={styles.item}>{tech}</li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    listStyle: "none",
    padding: 0
  },
  item: {
    padding: "10px 16px",
    border: "1px solid #ccc"
  }
};

export default Technologies;