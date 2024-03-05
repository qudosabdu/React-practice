import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "principle") setPrinciple(value);
    if (id === "interest") setInterest(value);
    if (id === "years") setYears(value);
  };

  // P(r(1+r)^n)/((1+r)^n-1)
  const calculateEMI = () => {
    const r = interest / 100 / 12; // monthly interest
    const n = years * 12; // number of months
    const emi = (principle * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1); // EMI
    setEmi(Math.round(emi));
  };

  useEffect(() => {
    calculateEMI();
  }, [principle, interest, years]);

  return (
    <div className="loan-calc">
      <h1>Martage Calculator </h1>
      <div className="inputs">
        <p>Principle:</p>
        <input
          type="number"
          id="principle"
          value={principle}
          onChange={handleChange}
        />
        <p>Interest:</p>
        <input
          type="number"
          id="interest"
          value={interest}
          onChange={handleChange}
        />
        <p>Years:</p>
        <input type="number" id="years" value={years} onChange={handleChange} />
      </div>
      <div className="output">Your EMI is {emi.toFixed(1)}</div>
    </div>
  );
}

export default App;
