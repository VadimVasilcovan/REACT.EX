import "./index.css";
import { AcordionItem } from "./AcordionItem";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Wfsafas fad  fdda dfads fad?",
    text: "Debitis sed, beatae eaque aut veritatis unde quod deleniti modi iste corrupti perferendis libero.",
  },
  {
    title: "fsasaf fad  sda das fad?",
    text: " Odit numquam ipsa neque, eos consequatur dolores culpa",
  },
];

export default function AcordionApp() {
  return (
    <div>
      <Acordion data={faqs} />
    </div>
  );
}

function Acordion({ data }) {
  return (
    <div className="acordion">
      {data.map((el, index) => (
        <AcordionItem key={index} title={el.title} text={el.text} num={index} />
      ))}
    </div>
  );
}


