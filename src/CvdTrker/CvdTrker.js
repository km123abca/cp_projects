import React, { useState, useEffect } from "react";
import "./CvdTrker.css";
import {
  FormControl,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import { sortData, prettyPrintStat } from "./util.js";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";

function CvdTrker() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  // const [mapCenter, setMapCenter] = useState({ lat: 54, lng: -2 });
  const [mapCenter, setMapCenter] = useState([54, -2]);
  const [mapZoom, setMapZoom] = useState(4);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((resp) => resp.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2, //UK, USA ETC
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        })
        .catch((err) => console.log(err));
    };
    getCountriesData();
  }, [countries]);

  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      })
      .catch((err) => {
        console.log("There was an error in the front end which is");
        console.log(err);
      });
  }, []);
  const onCountryChange = async (event) => {
    let countryCode = event.target.value;
    setCountry(countryCode);
    const url =
      countryCode == "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // setCountry(countryCode);
        setCountryInfo(data);
        console.log(
          JSON.stringify({
            lat: data.countryInfo.lat,
            lng: data.countryInfo.long,
          })
        );
        // setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      })
      .catch((err) => {
        console.log("There was an error in the front end which is");
        console.log(err);
      });
  };
  return (
    <div className="cvdTrker">
      <div className="cvdTrker__left">
        <div className="cvdTrker__header">
          <h1>Kitchu's Covid 19 Tracker</h1>
          <FormControl className="CvdTrker__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country, i) => {
                // console.log(JSON.stringify(country));
                return (
                  <MenuItem value={country.value} key={i}>
                    {country.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="cvdTrker__stats">
          <InfoBox
            active={casesType == "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Corona Virus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
            isRed={true}
            active={casesType == "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
          <InfoBox
            active={casesType == "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.recovered)}
            total={prettyPrintStat(countryInfo.todayRecovered)}
          />
        </div>
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className="cvdTrker__right">
        <CardContent>
          <h3 className="cvdTrker__graphtitle">Live cases by country</h3>
          <Table countries={tableData} />
          <h3>
            {casesType == "cases"
              ? "World wide Live Cases"
              : casesType == "deaths"
              ? "Total Deaths"
              : "Total Recovered"}
          </h3>
          <LineGraph
            caseType={casesType}
            className="cvdTrker_fullheightlinegraph"
          />
          {/*
          <h3>World wide Recoveries</h3>
          <LineGraph caseType="recovered" />
          <h3>World wide deaths</h3>
          <LineGraph caseType="deaths" /> 
          */}
        </CardContent>
      </Card>
    </div>
  );
}

export default CvdTrker;
// https://disease.sh/v3/covid-19/countries
