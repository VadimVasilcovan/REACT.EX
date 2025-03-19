import { useEffect } from "react";

export function useHandleEnter(interactionElemment, trigger) {
  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === "Enter") {
        interactionElemment();
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [interactionElemment, trigger]);
}
