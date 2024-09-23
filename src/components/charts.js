import React, { useEffect, useState } from "react";

import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
import chartdata from "./chart-data";
Chart.register(CategoryScale, ...registerables);
const ChartPage=()=>{
    const data = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          
          
        ],
        datasets: [
          {
            label: "Users",
            data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
            backgroundColor: "blue",
            borderColor: "white",
            borderWidth: 0.3,
            tension: 0.1,
            fill:true
          },
          {
            label: "New Users",
            data: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
            backgroundColor: "rgb(1, 183, 255)",
            borderColor: "white",
            borderWidth: 0.3,
            tension: 0.1,
            fill:true
          },
        ],
      };
    return(
        <div className="main-home-cnt">
        <h1>Charts</h1>
        <div className="chart-cnt">
        {chartdata.map((chart,index)=>
        <div className="chart" key={index}>
            <div className="chart-types">
              <h3 >{chart.chartname}</h3>
              <chart.charttype data={data}  />
            </div>
          </div>
        )}
          
        </div>
        </div>


    )
}
export default ChartPage;