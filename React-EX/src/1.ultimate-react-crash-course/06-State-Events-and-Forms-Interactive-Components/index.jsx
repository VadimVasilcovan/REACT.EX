import { useState } from "react";
import "../06-State-Events-and-Forms-Interactive-Components/index.css";

const messages = ["Learn React ", "Apply for job", "Invest your new income"];

export default function StateEventEx() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handlenext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handleisOpen() {
    setIsOpen((s) => !s);
  }
  return (
    <>
      <button className="close" onClick={handleisOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {messages[step - 1]}
            {console.log(step)}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlenext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
  S;
}
