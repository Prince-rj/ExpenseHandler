import React ,{useState} from 'react';
import './ExpenseItemcss.css';
import Date from './ExpenseDate';
// let flag=false;
function ExpenseItem(props){
    // const [title,setTitle]=useState(props.name);
    // const clickHandler=()=>{
    //     if(flag){
    //     setTitle('updated!!')
    //     flag=false;
    //     }
    //     else{
    //         setTitle(props.name)
    //         flag=true;
    //     }
    // }
    return (<div>
        <div className="box">
            <Date date={props.date}/>
            <div className="name">{props.name}</div>
            <div className="price">${props.price}</div>
            {/* <button onClick={clickHandler}>click me </button> */}
        </div>
    </div>)
}
export default ExpenseItem;