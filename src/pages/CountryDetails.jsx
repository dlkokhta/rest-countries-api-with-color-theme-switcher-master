import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { setData } from "../store/allDataSlice";
import { Link } from "react-router-dom";
const CountryDetails = () => {
  const { country } = useParams();

  const allData = useSelector((store) => store.allData);

  //   console.log("useParams", country);

  //   const data = allData.find((country) =>
  //     country.find((name) => name.name.common === country)
  //   );
  //   console.log(country);
  console.log(allData);

  const selectedCountry = allData.data.find(
    (data) => data.name.common.toLowerCase() === country.toLowerCase()
  );

  console.log("selectedCountry", selectedCountry);
  //   const selectedCountry = allData.find(
  //     (c) => c.name.common.toUpperCase() === country.toUpperCase()
  //   );

  //   const selectedCountry = allData.find(
  //     (data) => data.map((name) => name.name) === country
  //   );

  //   const data = allData.map((countryArray) =>
  //     countryArray.map((country) => <img src={country.flags.png} />)
  //   );

  //   console.log("alldataFrom countryDetails", data);

  return (
    <div className="flex flex-col pt-10 pl-7 pr-7">
      {/**back button */}
      <Link to={"/"}>
        <div className="flex flex-row gap-2 items-center pt-2 pb-2 pl-6 mr-[210px] mb-16 bg-[#2B3844] ">
          <svg
            fill="white"
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
          <div className="font-nunito text-base text-white ">Back</div>
        </div>
      </Link>
      {/**country details */}

      <div className="flex flex-col">
        {/**flag */}
        <div>
          <img className="h-[276px]" src={selectedCountry.flags.png} />
        </div>
        {/**info1 */}
        <div className="mt-11">
          <div className="text-white text-2xl font-nunito font-extrabold ">
            {selectedCountry.name.common}
          </div>

          <div className="text-white font-nunito text-sm leading-8">
            Native Name: {selectedCountry.name.common}
          </div>

          <div className="text-white font-nunito text-sm leadnig-8"></div>

          <div className="text-white font-nunito text-sm leading-8">
            Population: {selectedCountry.population}
          </div>
          <div className="text-white font-nunito text-sm leading-8">
            Region: {selectedCountry.region}
          </div>
          <div className="text-white font-nunito text-sm leading-8">
            Sub Region: {selectedCountry.subregion}
          </div>
          <div className="text-white font-nunito text-sm leading-8">
            Capital: {selectedCountry.capital}
          </div>
        </div>
        {/**info2 */}
        <div className="mt-8">
          <div className="text-white font-nunito text-sm leading-8">
            Top Level Domain: {selectedCountry.tld}
          </div>
          <div className="text-white font-nunito text-sm leading-8">
            Currencies
          </div>
          <div className="text-white font-nunito text-sm leading-8">
            Languages:
          </div>
        </div>
      </div>
      {/**info2 */}
      <div>
        <div className="text-white font-nunito mt-6 mb-4 font-semibold">
          Border Countries:
        </div>
        <div className="text-white   grid grid-cols-3 gap-2">
          {selectedCountry.borders.map((border) => (
            <div className=" bg-[#2B3844] flex items-center justify-center py-2 font-nunito font-light text-sm ">
              {border}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
