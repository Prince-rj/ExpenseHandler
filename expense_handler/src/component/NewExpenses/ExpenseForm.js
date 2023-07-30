import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) => {


    //     const [userInput,setUserInput]=useState({
    //         EnteredTitle:'',
    //         EnteredAmount:'',
    //         EnteredDate:''
    //     })


    const [EnteredTitle, setEnteredTitle] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState('');
    const [EnteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // // setUserInput({//we should not use it like this as in cases of frequent change a outdated userInput may be taken in account.
        // //     ...userInput,
        // //     EnteredTitle:event.target.value
        // // })
        // //we should instead create a function like this
        // setUserInput((prevState)=>{
        //     return {
        //     ...prevState,
        //     EnteredTitle:event.target.value
        // }
        // })
    }


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // // setUserInput({//we should not use it like this as in cases of frequent change a outdated userInput may be taken in account.
        // //     ...userInput,
        // //     EnteredAmount:event.target.value
        // // })
        // //we should instead create a function like this
        // setUserInput((prevState)=>{
        //     return {
        //     ...prevState,
        //     EnteredAmount:event.target.value
        // }
        // })
    }


    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // // setUserInput({//we should not use it like this as in cases of frequent change a outdated userInput may be taken in account.
        // //     ...userInput,
        // //     EnteredDate:event.target.value
        // // })
        // //we should instead create a function like this
        // setUserInput((prevState)=>{
        //     return {
        //     ...prevState,
        //     EnteredDate:event.target.value
        // }
        // })
    }
    const SubmitHandler =async  (event) => {
        event.preventDefault();
        const expenseData = {
            id: Math.random(),
            name: EnteredTitle,
            date: new Date(EnteredDate),
            price: +EnteredAmount
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onAdd(expenseData);
        const response = await fetch('http://localhost:5000/data',{
            method:'POST',
            body:JSON.stringify(expenseData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        // const data=await response.text();
        // console.log(data);
    }

    const date = new Date();
    const getDate = date.toISOString().split('T')[0];
    return (
        <form onSubmit={SubmitHandler} action="" className="ExpenseForm_form">
            <div className="ExpenseForm_container">
                <label htmlFor="" className="ExpenseForm_Label">Title</label>
                <input className="ExpenseForm_Input" onChange={titleChangeHandler} type="text" value={EnteredTitle} placeholder="Enter the name of the expense" />
            </div>
            <div className="ExpenseForm_container">
                <label className="ExpenseForm_Label" htmlFor="">Amount</label>
                <input value={EnteredAmount} className="ExpenseForm_Input" onChange={amountChangeHandler} type="number" placeholder="0.1" min="0.1" step="0.1" />
            </div>
            <div className="ExpenseForm_container">
                <label className="ExpenseForm_Label" htmlFor="">Date</label>
                <input value={EnteredDate} className="ExpenseForm_Input" onChange={dateChangeHandler} type="date" min="2019-01-01" max={getDate} />
            </div>
            <div className='ExpenseForm_Actions'>
                <button type='button' onClick={props.cancel} className="ExpenseForm_button">Cancel</button>
                <button type='submit' className="ExpenseForm_button">Submit</button>
            </div>
        </form>
    )
};
export default ExpenseForm;