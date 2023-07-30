import React, {useEffect,useState} from 'react';
import NewExpense from './component/NewExpenses/NewExpense'
import './App.css';
import Expenses from './component/Expenses/Expenses'

function App() {
  const [expense,setExpense] = useState([]);
  const getExpenses=async ()=>{
    const response = await fetch('http://localhost:5000/data',{
      method:'GET',
    })
    const data=await response.json();
    setExpense(data);
}

useEffect(()=>{
  getExpenses();
},[])

const SaveHandler=(ExpenseData)=>{
  setExpense((prevExpense)=>{return ([ExpenseData,...prevExpense])})
  // console.log(ExpenseData)
  //   console.log(ExpenseData.name);
}
  return (
    <div >
      <NewExpense  onSave={SaveHandler}></NewExpense>
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
