import { isRouteErrorResponse, useRouteError } from "react-router";
import { lazy } from "react";
import { Loadable } from "components/shared/Loadable";
import { Link } from "react-router-dom";

const app = {
  401: lazy(() => import("./401")),
  404: lazy(() => import("./404")),
  429: lazy(() => import("./429")),
  500: lazy(() => import("./500")),
};

function RootErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const Component = Loadable(app[error.status] || app[500]);
    return <Component />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6" role="alert">
      <div className="text-center max-w-md w-full">
        <div className="text-5xl mb-4">⚠️</div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Unexpected Error</h1>
        <p className="text-gray-600 mb-4">We&apos;re sorry, but something went wrong.</p>

        {import.meta.env.DEV && error && (
          <pre className="bg-gray-200 text-left text-sm p-4 rounded overflow-x-auto mb-4 whitespace-pre-wrap">
            {error?.message || String(error)}
          </pre>
        )}

        <div className="flex justify-center gap-4 mt-6">
          <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition">
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded transition"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default RootErrorBoundary;
