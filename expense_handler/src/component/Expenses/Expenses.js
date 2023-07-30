import './Expenses.css';
import Card from '../UI/Card';
import FilterExpense from '../FilterExpense/FilterExpense';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import Chart from '../Chart/Chart'
import ExpenseChart from './ExpenseChart';


const Expenses=props=>{
    const [filterValue,setFilterValue]=useState('2023')
    const FilterHandler=(selectedValue)=>{
        setFilterValue(selectedValue);
    }
    let expenses=props.expense.filter((expense)=>{
        // console.log(typeof expense.date);
        
        return new Date(expense.date).getFullYear().toString()===filterValue;
    })

    



    /*my way of doing it...*/
    //creating an array and using it
    // let arr=[];
    // props.expense.forEach((expense)=> {
    //     arr=[...arr,<ExpenseItem name={expense.name} date={expense.date} price={expense.price} />]
    //     return (arr
    //     )
    // })

    return (
        <div>
            <Card className='expenses'>
            <FilterExpense selected={filterValue} onFilter={FilterHandler}></FilterExpense>
            <ExpenseChart FilteredList={expenses} />
            {/*
            using arr to render all the elements in the array arr
             {arr} 
             */}

            <ExpenseList item={expenses}/>





            {/*  <ExpenseItem name={expense[0].name} date={expense[0].date} price={expense[0].price} /> 
            <ExpenseItem name={expense[1].name} date={expense[1].date} price={expense[1].price} /> 
            <ExpenseItem name={expense[2].name} date={expense[2].date} price={expense[2].price} /> */}




            </Card>
        </div>
    )   
}
export default Expenses;