import { useState } from "react";

export default function TipCalculator() {
  const [tip, setTip] = useState("");
  const [yourPercent, setYourPercent] = useState(0);
  const [friendP, setFriendP] = useState(0);

  return (
    <div>
      <Input value={setTip} tip={tip}>
        How much was the bill?
      </Input>
      <OptionInput setpercentVal={setYourPercent} percentVal={yourPercent}>
        How did you like the service?
      </OptionInput>
      <OptionInput setpercentVal={setFriendP} percentVal={friendP}>
        How did your friend like the service?
      </OptionInput>
      <ResultText tip={tip} yourpercent={yourPercent} frendsPercent={friendP} />
      <ResetButton
        value={setTip}
        setpercentValFriend={setFriendP}
        setpercentVal={setYourPercent}
      />
    </div>
  );
}

function Input({ value, tip, children }) {
  const setTipValue = (e) => {
    value(Number(e.target.value));
  };
  return (
    <div>
      {children}
      <input onChange={setTipValue} value={tip} />
    </div>
  );
}

function OptionInput({ setpercentVal, children, percentVal, onchange }) {
  const setPercentValue = (e) => {
    setpercentVal(Number(e.target.value));
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

function ResultText({ tip, yourpercent, frendsPercent }) {
  const calcValue =
    tip + (tip / 100) * yourpercent + (tip / 100) * frendsPercent;

  return (
    <div>
      {tip && `You paid ${tip} ($${yourpercent} + $${frendsPercent})`}
      {calcValue > 0 ? `you paid ${calcValue}` : ""}
    </div>
  );
}

function ResetButton({ value, setpercentValFriend, setpercentVal }) {
  const Clear = () => {
    value("");
    setpercentValFriend(0);
    setpercentVal(0);
  };
  return <button onClick={Clear}>Delete</button>;
}
