import "./App.css";

function App() {
  return (
    <div className="loan-calc">
      <h1>Martage Calculator </h1>
      <div className="inputs">
        <p>Principle:</p>
        <input type="number" id="principle" />
        <p>Interest:</p>
        <input type="number" id="interest" />
        <p>Years:</p>
        <input type="number" id="years" />
      </div>
      <div>
        Your EMI is 2000
      </div>
    </div>
  );
}

export default App;
