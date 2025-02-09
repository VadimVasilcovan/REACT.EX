import {  useState } from "react";

export default function TipCalculator() {
  const [tip, setTip] = useState(0);
  const [yourPercent, setYourPercent] = useState(0);
  const [friendP, setFriendP] = useState (0)
  const [summ, setSumm]= useState (0)

  return (
    <div>
      <Input value={setTip} tip={tip}>How much was the bill?</Input>
      <OptionInput setpercentVal={setYourPercent} percentVal={yourPercent}>How did you like the service?</OptionInput>
      <OptionInput setpercentVal={setFriendP} percentVal={friendP}>How did your friend like the service?</OptionInput> 
      <ResultText summ={summ} setSumm={setSumm}/>

    </div>
  );
}

function Input({ value,tip, children }) {
  
  const setTipValue = (e) => {
    value(e.target.value);
  };
  return (
    <div>
      {children}
      <input  onChange={setTipValue} 
      value={tip}/>
    </div>
  );
};

function OptionInput({ setpercentVal, children, percentVal }) {
  
  const setPercentValue = (e) => {
    setpercentVal(e.target.value);
  };
  return (
    <div>
      {children}
      <select value={percentVal} onChange={setPercentValue}>
        <option value={0}>Sissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>IT was good (10%)</option>
        <option value={20}>Absolutly amazing! (20%)</option>
      </select>
    </div>
  );
}

function ResultText ({summ, setSumm}){


  return(<div>
    
  </div>)
}
