import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Página no encontrada
        </h2>
        <p className="mt-2 text-gray-500">
          Lo sentimos, la página que buscas no existe
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-blue-700">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}