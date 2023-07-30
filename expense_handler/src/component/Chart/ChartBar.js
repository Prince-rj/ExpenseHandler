import React from "react";
import './ChartBar.css';
const ChartBar=(props)=>{
    let fillChartBar='0%';
    if(props.maxValue>0){
        fillChartBar=(props.value/props.maxValue)*100 +'%';
    }
    return (
        <div className="ChartBar">
            <div className="chartBarInner">
                <div className="chartbarfill" style={{height : fillChartBar}}></div>
            </div>
            <div className="chartBarLabel">{props.label}</div>

        </div>
    )
};
export default ChartBar;