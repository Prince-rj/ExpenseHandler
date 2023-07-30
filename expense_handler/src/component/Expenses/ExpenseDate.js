function ExpenseDate(props){
    
    let month=new Date(props.date).toLocaleString('en-us',{month:'long'});
    let day=new Date(props.date).toLocaleString('en-us',{day:'2-digit'});
    let year=new Date(props.date).toLocaleString('en-us',{year:'numeric'});
    return(<div className="date">
    <div className="datemon">{month}</div>
    <div className="dateyear">{year}</div>
    <div className="dateday">{day}</div>
    </div>)
}
export default ExpenseDate;