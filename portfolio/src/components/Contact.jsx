const Contact = () => {
  return (
    <section id="contacto" style={styles.section}>
      <h2>Contacto</h2>

      <p>
        📧 Email:{" "}
        <a href="mailto:karianna_arriaga07@gmail.com">karianna_arriaga07@gmail.com</a>
      </p>

      <p>
        💬 WhatsApp:{" "}
        <a
          href="https://wa.me/584143417985"
          target="_blank"
          rel="noreferrer"
        >
          Enviar mensaje
        </a>
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    maxWidth: "800px",
    margin: "0 auto"
  }
};

export default Contact;