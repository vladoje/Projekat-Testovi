import { Link } from "react-router";

function CheckEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Proveri svoj email
        </h2>

        <p className="mt-4 text-sm text-gray-600">
          Ako nalog sa unetom email adresom postoji, poslali smo ti email sa
          linkom za promenu lozinke. Proveri inbox i spam folder.
        </p>

        <Link
          to="/login"
          className="mt-6 inline-block w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Nazad na prijavu
        </Link>
      </div>
    </div>
  );
}

export default CheckEmail;
