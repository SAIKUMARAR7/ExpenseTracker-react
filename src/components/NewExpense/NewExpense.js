import NewExpenseForm from "../NewExpenseForm/NewExpenseForm"
import './NewExpense.css'
import React,{useState} from "react";


const NewExpense=(props)=>{
    const [isEditing , setIsEditing] = useState(false);
    const ExpenseDataHandler=(entereexpensedata)=>
    {
        const expensedata={
            ...entereexpensedata,
            id:Math.random().toString(),
        }
        
        props.addnewdata(expensedata)
        setIsEditing(false)

    }
    const StartEditingHandler=()=>{
        setIsEditing(true)
    };
    const StopEditingHandler=()=>{
        setIsEditing(false)
    };
 
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={StartEditingHandler}>Add Expense</button>}
            {isEditing && <NewExpenseForm onsaveExpenseData={ExpenseDataHandler} stop={StopEditingHandler}/>}

        </div>
    )
};

export default NewExpense