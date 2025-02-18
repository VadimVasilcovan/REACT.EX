import { useState } from "react";

export default function TextExpander() {
  const cardDesign = {
    backgroundColor: "black", // light gray background
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // soft shadow effect
    maxWidth: "600px",

    fontFamily: "Arial, sans-serif",
  };
  return (
    <div>
      <ExpandingTheText
        hideText={"Show More"}
        expandText={"Show Less"}
        minLength={60}
      >
        , Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro,
        culpa, doloremque, praesentium natus quae iure hic modi aspernatur sunt
        minima placeat et expedita quo sapiente id magnam similique? Nesciunt.
      </ExpandingTheText>
      <ExpandingTheText
        hideText={"Collapse Text"}
        expandText={" Show text"}
        minLength={20}
        buttonDesign="black"
      >
        , dsa ipsum das sit das dsad dcsdzcv cvzzx. Soluta porro, culpa,
        doloremque, praesentium natus quae iure hic modi dsasd .
      </ExpandingTheText>

      <ExpandingTheText cardDesign={cardDesign} minLength={55}>
        , dsa ipsum das sit das dsad dcsdzcv cvzzx. Soluta porro, culpa,
        doloremque, praesentium natus quae iure hic modi dsasd .
      </ExpandingTheText>
    </div>
  );
}

function ExpandingTheText({
  children,
  hideText = "less",
  expandText = "more",
  buttonDesign,
  cardDesign,
  minLength = 100,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = children.slice(0, minLength); // Show only first 100 characters

  return (
    <p style={cardDesign}>
      {isExpanded ? children : previewText + "..."}
      <button
        style={{ backgroundColor: buttonDesign }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? `${hideText}` : `${expandText}`}
      </button>
    </p>
  );
}
