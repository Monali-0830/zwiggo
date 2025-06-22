import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
                <h1 className="text-6xl font-extrabold text-red-500 mb-4">Oopssss!!!</h1>
                <h3 className="text-xl font-semibold text-gray-700 mb-6">Something Went Wrong</h3>
                <p className="text-md text-gray-500">
                    <span className="font-bold text-red-600">Error {err.status}: </span>
                    {err.statusText || "An unexpected error occurred."}
                </p>
                <div className="mt-8">
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-500 focus:outline-none"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
