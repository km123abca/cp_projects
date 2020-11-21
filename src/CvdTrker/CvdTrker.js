import React, { useState, useEffect } from "react";
import "./CvdTrker.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";

function CvdTrker() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((resp) => resp.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.name,
            value: country.countryInfo.iso2, //UK, USA ETC
          }));
          setCountries(countries);
        })
        .catch((err) => console.log(err));
    };
    getCountriesData();
  }, [countries]);
  return (
    <div className="cvdTrker">
      <div class="cvdTrker__header">
        <h1>Skeleton website</h1>
        <FormControl className="CvdTrker__dropdown">
          <Select variant="outlined" value="AL">
            {countries.map((country) => {
              console.log(JSON.stringify(country));
              return <MenuItem value={country.value}>{country.value}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default CvdTrker;
// https://disease.sh/v3/covid-19/countries
