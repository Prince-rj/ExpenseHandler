import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
const NewExpense=(props)=>{
    const [flag,setFlag]=useState(false);
    const BtnClickHandler =()=>{
        setFlag(true);
    }
    const CancelHandler=()=>{
        setFlag(false);
    }
    const addHandler=(expenseData)=>{
        props.onSave(expenseData);
        setFlag(false);
    }
    if(flag){
        
    return (
    <div className='NewExpense_Container'>
        <h1 className='header'>New Expense</h1>
        <ExpenseForm cancel={CancelHandler} onAdd={addHandler}></ExpenseForm>
    </div>
    )
    }
    else{
        return(
            <div className='NewExpense_Container NewExpense_btninterface'>
            <h1 className='header'>New Expense</h1>
            <button onClick={BtnClickHandler} className="NewExpense_button">
                Add New Expense
            </button>
            </div>)
    }
}
export default NewExpense;