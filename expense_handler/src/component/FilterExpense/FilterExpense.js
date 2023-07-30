import './FilterExpense.css'

const FilterExpense = (props) => {
    const ChangeHandler=(event)=>{
        props.onFilter(event.target.value);
    }
    return (
        <div className="filtercontainer">
            <div className="heading">
            <label htmlFor="">Filter Elements</label>
            <select value={props.selected}onChange={ChangeHandler} name="" id="" className="selection">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            </div>
        </div>
    )
}
export default FilterExpense;