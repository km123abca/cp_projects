import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
function LineGraph({ caseType = "cases", className }) {
  const [data, setData] = useState({});
  // console.log("line graph says:" + caseType);
  //"https://disease.sh/v3/covid-19/historical/all?lastdays120"
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays120")
        .then((response) => response.json())
        .then((data) => {
          // console.log("Entire Data");
          // console.log(JSON.stringify(data));
          const chartData = buildChartData(data, caseType);
          setData(chartData);
        });
    };
    fetchData();
  }, [caseType]);
  const buildChartData = (data, caseType = "cases") => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[caseType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[caseType][date];
    }
    console.log(JSON.stringify(chartData));
    return chartData;
  };
  return (
    <div className={className}>
      {/* <Line data options /> */}

      {data?.length > 0 ? (
        <Line
          options={options}
          data={{
            datasets: [
              {
                // data: [
                //   { x: "1/1/2000", y: 1 },
                //   { x: "2/2/2000", y: 2 },
                //   { x: "3/3/2000", y: 3 },
                // ],
                data: data,
                backgroundColor: "rgba(204,16,52,0.1)",
                borderColor: "#CC1034",
              },
            ],
          }}
        />
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default LineGraph;
