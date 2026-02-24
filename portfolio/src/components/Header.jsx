const Header = () => {
  return (
    <header style={styles.header}>
      <h2>Karianna Arriaga</h2>
      <nav>
        <a href="#tecnologias ">Tecnologías</a><br />
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    borderBottom: "1px solid #eee"
  }
};

export default Header;