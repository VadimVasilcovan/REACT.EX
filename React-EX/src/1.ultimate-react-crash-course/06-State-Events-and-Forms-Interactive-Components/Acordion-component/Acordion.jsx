import "./index.css";
import { AcordionItem } from "./AcordionItem";
import { useState } from "react";

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
  {
    title: "fsasaf fada  fsa dssfd  fad?",
    text: " Odit dg g sgdf fgfds, eos consequatur dolores culpa",
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
  const [curOpen, setCurIsOpen] = useState(null);
  return (
    <div className="acordion">
      {data.map((el, index) => (
        <AcordionItem
          key={index}
          curOpen={curOpen}
          onOPen={setCurIsOpen}
          title={el.title}
          num={index}
        >
          {el.text}
        </AcordionItem>
      ))}

<AcordionItem
         
          curOpen={curOpen}
          onOPen={setCurIsOpen}
          title={'test 1'}
          num={22}
        >
         DASASD SDAD AS FA F DSF SDFSDF ASF ASD F 
          DSAF ASD DSAF ADF ADS

          FDFADSFASDF
        </AcordionItem>
    </div>
  );
}
