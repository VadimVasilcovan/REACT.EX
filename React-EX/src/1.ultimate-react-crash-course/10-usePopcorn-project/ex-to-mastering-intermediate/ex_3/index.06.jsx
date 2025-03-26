import { useEffect } from "react";

export default function MovieModal({ movie, onCloseMovie }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        onCloseMovie();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseMovie]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/3">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onCloseMovie}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold">{movie.title}</h2>
        <p className="mt-2">{movie.description}</p>
      </div>
    </div>
  );
}
