import Header from "./components/Header";
import Input from "./components/Input";
import CountryDetails from "./pages/CountryDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import Test from "./pages/Test";
import axios from "axios";
import { setData } from "./store/allDataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const allDataDispatch = useDispatch();

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
    <div className="bg-[#202C36] ">
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
