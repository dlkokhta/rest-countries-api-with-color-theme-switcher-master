import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [entireInputValue, setEntireInputValue] = useState("");
  const [regioFilterIsHide, setRegioFilterIsHide] = useState(false);
  const [selectedRegione, setSelectedRegione] = useState(null);

  console.log(entireInputValue);

  const allData = useSelector((store) => store.allData);
  console.log(allData);

  const inputOnchaneHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputSubmitHandler = () => {
    setEntireInputValue(inputValue);
  };

  const regionFilterMenuhandler = () => {
    setRegioFilterIsHide(!regioFilterIsHide);
  };
  const regionClickhandler = (region) => {
    setSelectedRegione(region);
  };

  setTimeout(() => {
    setRegioFilterIsHide(false);
  }, 3000);

  return (
    <div className="mt-6 pl-4 pr-4">
      {/**Input */}
      <div className="bg-[#2B3844] flex items-center pt-4 pr-4 pb-4 pl-8 gap-6 rounded-md">
        {/**Search icon */}
        <svg
          onClick={inputSubmitHandler}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
        <input
          onChange={inputOnchaneHandler}
          className=" placeholder-gray outline-none bg-transparent text-white text-sm items-center w-full "
          placeholder="Search for a country..."
        />
      </div>
      {/**Filter */}
      <div className="relative bg-[#2B3844] mt-10 mr-[134px]  flex items-center justify-between pt-4 pr-4 pb-4 pl-6 rounded-md ">
        <h1 className="text-white text-sm font-nunito font-normal">
          Filter by Region
        </h1>
        {/**Arrow down icon */}
        <svg
          className="duration-1000"
          onClick={regionFilterMenuhandler}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path fill="none" stroke="white" strokeWidth="1.5" d="m1 1 6 6 6-6" />
        </svg>
        {/**menu of regios, filter unique regions from allData*/}
        {regioFilterIsHide && (
          <div className="absolute bg-[#2B3844] pt-4 pr-32 pl-6 pb-4 flex flex-col gap-2 top-14 right-0 rounded-md ">
            {allData.data
              .map((item) => item.region)
              .filter((region, index, self) => self.indexOf(region) === index)
              .map((region, index) => (
                <div
                  onClick={() => regionClickhandler(region)}
                  className="text-white text-sm font-nunito font-normal"
                  key={index}
                >
                  {region}
                </div>
              ))}
          </div>
        )}
      </div>
      {/**it contains all countries */}
      <div>
        {allData.data
          .filter(
            (country) => !selectedRegione || country.region === selectedRegione
          )
          .map((country, index) => (
            <div key={index} className="mt-6 flex flex-col gap-10 pl-10 pr-10 ">
              <Link to={"/details/" + country.name.common}>
                <div className="bg-[#2B3844] flex flex-col pb-11">
                  <img className="h-[160px]" src={country.flags.png} />

                  <div className=" font-nunito text-white font-extrabold text-lg leading-7 pt-6 pl-6 pb-4 ">
                    {country.name.common}
                  </div>
                  <div className="flex flex-col pl-6 text-white">
                    <div> Population: {country.population}</div>
                    <div> Region: {country.region}</div>
                    <div> Capital: {country.region}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Input;
