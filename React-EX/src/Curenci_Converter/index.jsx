import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [yourCurrency, setYourCurrency] = useState("EUR");
  const [wishedCurrency, setWishedCurrency] = useState("USD");
  const [value, setValue] = useState(1);
  const [convertedCurrency, setConvertedCurrency] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${yourCurrency}&to=${wishedCurrency}`
        );

        if (wishedCurrency === yourCurrency)
          throw new Error("select different currency");
        if (!response.ok) throw new Error("Something went wrong, try later");
        const result = await response.json();
        setConvertedCurrency(result.rates[wishedCurrency]);
      } catch (err) {
        setError(err.message);
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
      <CurrencySelector currency={yourCurrency} setCurrency={setYourCurrency} />
      <CurrencySelector
        currency={wishedCurrency}
        setCurrency={setWishedCurrency}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ShowResult
        convertedCurrency={convertedCurrency}
        wishedCurrency={wishedCurrency}
      />
    </>
  );
}

function InputCurrency({ value, setValue }) {
  return (
    <input
      value={value}
      type="number"
      onChange={(e) => setValue(Number(e.target.value))}
      placeholder="Enter amount"
    />
  );
}

function CurrencySelector({ currency, setCurrency }) {
  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
      <option value="EUR">EUR</option>
      <option value="BGN">BGN</option>
      <option value="USD">USD</option>
      <option value="CAD">CAD</option>
    </select>
  );
}

function ShowResult({ convertedCurrency, wishedCurrency }) {
  return (
    <div>
      <h1>
        {convertedCurrency} {wishedCurrency}
      </h1>
    </div>
  );
}
