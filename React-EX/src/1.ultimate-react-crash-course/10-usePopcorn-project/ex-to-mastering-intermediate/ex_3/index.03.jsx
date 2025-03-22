import { useRef } from "react";

export default function App() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <button
        onClick={scrollToSection}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Scroll Down
      </button>
      <div className="h-96"></div>
      <div
        ref={sectionRef}
        className="w-full h-32 bg-green-400 flex items-center justify-center"
      >
        Target Section
      </div>
    </div>
  );
}
