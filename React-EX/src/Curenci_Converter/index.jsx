import { useEffect, useState } from "react";

export default function CurrenceConverter() {
  const [yourCurrency, setYourCurrency] = useState("EUR");
  const [wishedCurrency, setWishedCurrency] = useState("USD");
  const [value, setValue] = useState(1);
  const [convertedCurency, setConvertedCurreny] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = "";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${yourCurrency}&to=${wishedCurrency}`
        );
        const result = await data.json();
        setConvertedCurreny(result.rates[wishedCurrency]);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    if (yourCurrency && wishedCurrency && value) {
      fetchData();
    }
  }, [yourCurrency, wishedCurrency, value]);
  return (
    <>
      <InputCurrency value={value} setValue={setValue} />
      <YourCurrenceFun currency={yourCurrency} setCurrency={setYourCurrency} />
      <YourCurrenceFun
        currency={wishedCurrency}
        setCurrency={setWishedCurrency}
      />
      <ShowResult
        convertedCurency={convertedCurency}
        wishedCurrency={wishedCurrency}
      />
    </>
  );
}
function InputCurrency({ value, setValue }) {
  return (
    <>
      <input
        value={value}
        type="Number"
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="enter currency"
      />
    </>
  );
}
function YourCurrenceFun({ currency, setCurrency }) {
  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      <option value="EUR">EU</option>
      <option value="BGN">BGN</option>
      <option value="USD">USD</option>
      <option value="CAD">CAD</option>
    </select>
  );
}

function ShowResult({ convertedCurency, wishedCurrency }) {
  return (
    <div>
      <h1>
        {convertedCurency}
        {wishedCurrency}
      </h1>
    </div>
  );
}
