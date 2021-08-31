import React,{useState} from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {

   const [changedTitle,setChangedTitle]=useState('')
    const [changedAmount,setChangedAmount]=useState('')
    const [changedDate,setChangedDate]=useState('')
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',


    // })

    const titleChangeHandeler=(event)=>
    {
        setChangedTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
    }
    const amountChangeHandeler=(event)=>
    {
        setChangedAmount(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
    }
    const DateChangeHandeler=(event)=>
    {
        setChangedDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }
    const inputdataHandeler=(event)=>
    {
        event.preventDefault()
        const ExpenseData={
            title:changedTitle,
            amount:changedAmount,
            date:changedDate
        }
        
        props.onsaveExpenseData(ExpenseData)
        setChangedTitle('')
        setChangedAmount('')
        setChangedDate('')
    }
   
    
  return (
    <form onSubmit={inputdataHandeler}>
      <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={changedTitle} onChange={titleChangeHandeler}/>
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type="number" min="0.01" step="0.01" value={changedAmount} onChange={amountChangeHandeler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" min="2019/01/01" max="2022/12/31" value={changedDate}onChange={DateChangeHandeler}/>
            </div>
        </div>
      <div className="new-expense__actions">
            <button type="button" onClick={props.stop}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  );
};

export default NewExpenseForm;
