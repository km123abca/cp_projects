import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import React from "react";

const casesTypeColors = {
  cases: {
    hex: "#00FFFF",
    multiplier: 800,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#00FF00",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) return -1;
    else return 1;
  });
  return sortedData;
};
export const showDataMap = (data, casesType = "cases") => {
  // console.log(casesTypeColors[casesType].hex);
  let col = casesTypeColors[casesType].hex;
  return data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      // fillColor={casesTypeColors[casesType].hex}
      fillColor={col}
      radius={
        Math.sqrt(country[casesType]) *
        casesTypeColors[casesType].multiplier *
        0.1
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};

export const prettyPrintStat = (stat) =>
  stat ? `${numeral(stat).format("+0.0a")}` : "+0";
