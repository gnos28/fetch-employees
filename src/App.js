import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayQuote from "./components/DisplayQuote";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loadingEmp, setLoadingEmp] = useState(false);
  const [quote, setQuote] = useState([]);
  const [loadingQuote, setLoadingQuote] = useState(false);

  // axios version
  const handleClick = () => {
    setLoadingEmp(true);
  };
  const handleClickSimpson = () => {
    setLoadingQuote(true);
  };

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.data)
      .then((res) => {
        setLoadingQuote(false);
        setQuote(res[0]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    if (loadingEmp) {
      axios
        .get("https://randomuser.me/api?nat=en")
        .then((res) => res.data)
        .then((res) => {
          setLoadingEmp(false);
          setEmployees(res.results[0]);
        });
    }
    if (loadingQuote) getQuote();
  }, [loadingEmp, loadingQuote]);

  // get Simpson Quote

  // fetch version
  const handleClickFetch = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((res) => res.json())
      .then((res) => setEmployees(res.results[0]));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Get employee</button>
      {loadingEmp && <p>LOADING</p>}
      <DisplayEmployee {...employees} />
      <button onClick={handleClickSimpson}>Get quote</button>
      {loadingQuote && <p>LOADING</p>}
      <DisplayQuote {...quote} />
    </div>
  );
}

export default App;
