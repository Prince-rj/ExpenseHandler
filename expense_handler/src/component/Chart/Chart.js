import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const ExpenseValueList = props.dataPoint.map((element) => {
    return element.value;
  });
  let ExpenseMaxValue=0;
  ExpenseValueList.forEach(element => {
    ExpenseMaxValue+=element;
  });
  return (
    <div className="chart">
      {props.dataPoint.map((data) => {return (
        <ChartBar
          key={data.label}
          value={data.value}
          label={data.label}
          maxValue={ExpenseMaxValue}
        />
      )})}
    </div>
  );
};
export default Chart;
