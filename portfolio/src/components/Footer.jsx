const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Karianna Arriaga</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #eee"
  }
};

export default Footer;