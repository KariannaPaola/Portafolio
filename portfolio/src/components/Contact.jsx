const Contact = () => {
  return (
  <section id="contacto" className="bg-slate-900 py-20 px-6">
    <div className="max-w-3xl mx-auto text-center">

      <h2 className="text-4xl font-bold text-white mb-12">
        Contacto
      </h2>

      <div className="space-y-6">

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-gray-300 text-lg">
            📧 <span className="font-semibold text-white">Email:</span>{" "}
            <a
              href="mailto:karianna_arriaga07@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 transition"
            >
              karianna_arriaga07@gmail.com
            </a>
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-gray-300 text-lg">
            💬 <span className="font-semibold text-white">WhatsApp:</span>{" "}
            <a
              href="https://wa.me/584143417985"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              Enviar mensaje
            </a>
          </p>
        </div>

      </div>

    </div>
  </section>
);
};


export default Contact;