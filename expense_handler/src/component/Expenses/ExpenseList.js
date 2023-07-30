import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"
const ExpenseList=(props)=>{
    
    if(props.item.length>0){
    return (
        <ul className="expenseList_ul">    
        <li>
        {
            props.item.map((expen)=> {
            return (
                <ExpenseItem key={expen.id} name={expen.name} date={expen.date} price={expen.price} />
                )
            })
        }
        </li>
        </ul>
    )
    }
    return (<h2 className="ExpensePara">No Items Found</h2>)
}
export default ExpenseList;