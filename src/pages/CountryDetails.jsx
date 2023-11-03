import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const CountryDetails = () => {
  const { country } = useParams();

  const allData = useSelector((store) => store.allData);
  const changeMode = useSelector((store) => store.mode.Boolean);

  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const borderCountry = allData.data.find(
      (data) => data.cca3 && data.cca3.toUpperCase() === country.toUpperCase()
    );

    setSelectedCountry(borderCountry);
  }, [allData]);

  const borderCountryClickhandler = (border) => {
    const borderCountry = allData.data.find(
      (data) => data.cca3 && data.cca3 === border
    );
    setSelectedCountry(borderCountry);
  };

  return (
    <div className="flex flex-col pt-10 pl-7 pr-7 pb-24 xl:pl-20  ">
      {/**back button */}
      <Link to={"/"}>
        <div
          className={`${
            changeMode ? " bg-[#2B3844]" : "bg-white"
          } flex flex-row gap-2 items-center pt-2 pb-2 pl-6 mr-[210px] mb-16  max-w-[140px]`}
        >
          <svg
            style={{ fill: changeMode ? "white " : "black" }}
            height="18px"
            width="18px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 476.213 476.213"
            xmlSpace="preserve"
          >
            <polygon
              points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
	57.427,253.107 476.213,253.107 "
            />
          </svg>
          <div
            className={`${
              changeMode ? "text-white" : "text-black"
            } font-nunito text-base `}
          >
            Back
          </div>
        </div>
      </Link>
      {/**country details */}
      <div className={`${changeMode ? "text-[white]" : "text-black"}`}>
        {selectedCountry && (
          <div className="flex flex-col xl:flex xl:flex-row xl:gap-[130px]">
            {/**flag img*/}
            <div>
              <img
                className="h-[230px] w-[320px] xl:h-[401px] xl:w-[560px]"
                src={selectedCountry.flags.png}
              />
            </div>
            {/**info1,info2 */}
            <div>
              <div className="xl:flex xl:gap-[160px] ">
                {/**info1 */}

                <div className="mt-11 ">
                  {/**name */}
                  <div className=" text-2xl font-nunito font-extrabold xl:text-3xl  xl:mb-6 ">
                    {selectedCountry.name.common}
                  </div>

                  <div className="xl:flex xl:flex-row xl:gap-[146px] ">
                    <div className="xl:flex xl:flex-col">
                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8 ">
                        Native Name: {selectedCountry.name.common}
                      </div>

                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8">
                        Population: {selectedCountry.population}
                      </div>
                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8">
                        Region: {selectedCountry.region}
                      </div>
                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8">
                        Sub Region: {selectedCountry.subregion}
                      </div>
                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8">
                        Capital: {selectedCountry.capital}
                      </div>
                    </div>

                    {/**info2 */}
                    <div className="mt-8 xl:flex xl:flex-col xl: align-top xl:mt-0">
                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8">
                        Top Level Domain: {selectedCountry.tld}
                      </div>
                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8">
                        Currencies:{" "}
                        {/* need to map over the currencies object here */}
                      </div>
                      <div className=" font-nunito text-sm leading-8 xl:text-base xl:leading-8">
                        Languages: Dutch, French, German
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/**border countries*/}
                <div className="xl:flex">
                  <div className=" font-nunito mt-6 mb-4 font-semibold xl:inline-block">
                    Border Countries:
                  </div>

                  <div className=" grid grid-cols-3 gap-2 xl:grid-cols-4 xl:mt-6 xl:ml-4">
                    {selectedCountry &&
                      selectedCountry.borders &&
                      selectedCountry.borders.map((border, index) => (
                        <div
                          key={index}
                          onClick={() => borderCountryClickhandler(border)}
                          className={`${
                            changeMode ? "bg-[#2B3844]" : "bg-white"
                          } flex items-center justify-center py-2 font-nunito font-light text-sm 
                                             xl:w-24 xl:h-7  xl:text-center`}
                        >
                          {border}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
