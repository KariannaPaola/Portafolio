const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1>Hola, soy Karianna 👋</h1>
      <p>
        Desarrollador Web Frontend especializado en React.
        Me enfoco en crear interfaces modernas, limpias y funcionales.
      </p>

      <a
        href="https://github.com/TU_GITHUB"
        target="_blank"
        rel="noreferrer"
        style={styles.button}
      >
        Ver GitHub
      </a>
    </section>
  );
};

const styles = {
  hero: {
    padding: "80px 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center"
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 24px",
    background: "#000",
    color: "#fff",
    textDecoration: "none"
  }
};

export default Hero;