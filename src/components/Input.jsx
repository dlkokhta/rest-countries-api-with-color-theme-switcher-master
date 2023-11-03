import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [entireInputValue, setEntireInputValue] = useState("");
  const [regioFilterIsHide, setRegioFilterIsHide] = useState(false);
  const [selectedRegione, setSelectedRegione] = useState(null);
  const changeMode = useSelector((store) => store.mode.Boolean);

  const allData = useSelector((store) => store.allData);

  const filteredCountries = allData.data
    .filter((country) => !selectedRegione || country.region === selectedRegione)
    .filter(
      (country) =>
        !entireInputValue ||
        country.name.common
          .toLowerCase()
          .includes(entireInputValue.toLowerCase())
    );

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
  }, 10000);

  return (
    <div className="mt-6  ">
      {/**Input  && Filter container*/}
      <div className=" xl:flex  xl:justify-between xl:px-20 xl:my-11  xl:h-[56px] xl:items-center ">
        {/**Input */}
        <div
          className={`${
            changeMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
          } flex items-center pt-4 pr-4 pb-4 pl-8 gap-6 rounded-md mx-4 xl:m-0  xl:w-[480px] `}
        >
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
              stroke={changeMode ? "white" : "#B2B2B2"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
          <input
            onChange={inputOnchaneHandler}
            className={`${
              changeMode ? "text-[#ffffff] " : "text-black"
            }  outline-none bg-transparent  text-sm items-center w-full`}
            placeholder="Search for a country..."
          />
        </div>
        {/**Filter */}
        <div
          className={`${
            changeMode ? "bg-[#2B3844] " : "bg-[#ffffff]"
          } max-w-[210px] relative mt-10 mr-[134px]  flex items-center justify-between pt-4 pr-4 pb-4 pl-6 rounded-md ml-4 mb-8
           xl:mr-0 xl:flex xl:py-4 xl:px-5 xl:gap-14 text-base `}
        >
          <h1
            className={`${
              changeMode ? "text-[#ffffff]" : "text-[#111517]"
            } text-sm font-nunito font-normal`}
          >
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
            <path
              fill="none"
              style={{ stroke: changeMode ? "white" : "#B2B2B2" }}
              strokeWidth="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
          {/**menu of regios, filter unique regions from allData*/}
          {regioFilterIsHide && (
            <div
              className={`${
                changeMode ? "bg-[#2B3844]" : "bg-white"
              } absolute pt-4 pr-32 pl-6 pb-4 flex flex-col gap-2 top-14 right-0 rounded-md `}
            >
              {allData.data
                .map((item) => item.region)
                .filter((region, index, self) => self.indexOf(region) === index)
                .map((region, index) => (
                  <div
                    onClick={() => regionClickhandler(region)}
                    className={`${
                      changeMode ? "text-[#ffffff]" : "text-black"
                    } text-sm font-nunito font-normal`}
                    key={index}
                  >
                    {region}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {/**it contains all countries */}
      <div className="xl:px-20 w-full grid  justify-items-center items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-16 xl:gap-y-16">
        {filteredCountries
          // .filter(
          //   (country) => !selectedRegione || country.region === selectedRegione
          // )
          .map((country, index) => (
            <div key={index} className="  w-[264px]">
              <Link to={"/details/" + country.cca3}>
                <div
                  className={`${
                    changeMode ? "bg-[#2B3844]" : "bg-[#ffffff]"
                  } flex flex-col pb-11 w-[264px]`}
                >
                  <img className="h-[160px]" src={country.flags.png} />

                  <div
                    className={`${
                      changeMode ? "text-[#ffffff] " : "text-black"
                    } font-nunito font-extrabold text-lg leading-7 pt-6 pl-6 pb-4 `}
                  >
                    {country.name.common}
                  </div>
                  <div
                    className={`${
                      changeMode ? "text-[#ffffff] " : "text-black"
                    }   flex flex-col pl-6`}
                  >
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
