import Header from "./components/Header";
import Input from "./components/Input";
import CountryDetails from "./pages/CountryDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import Test from "./pages/Test";
import axios from "axios";
import { setData } from "./store/allDataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const allDataDispatch = useDispatch();
  const changeMode = useSelector((store) => store.mode.Boolean);

  const fetcheData = async () => {
    try {
      const url = `https://restcountries.com/v3.1/all`;
      const response = await axios.get(url);
      allDataDispatch(setData(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetcheData();
  }, []);

  return (
    <div
      className={`${
        changeMode
          ? "bg-[#202C36] duration-500"
          : "bg-[hsl(90,10%,96%)] duration-500"
      } max-h-display`}
    >
      <Header />
      <Test />
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/test" element={<Test />} />
        <Route path="/details/:country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
