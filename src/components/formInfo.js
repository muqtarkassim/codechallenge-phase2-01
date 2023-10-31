import React, { useState } from "react";
import './comp.css'
export default function FormInfo({handleSubmit}){
    const[names,setnames]=useState("")
    const[amount,setamount]=useState("")
    const[category,setcategory]=useState("")
    const[date,setdate]=useState("")
    function onsubmit(e){
        e.preventDefault();
        handleSubmit({"description":names,"amount":amount,"category":category,"date":date})
        setnames("");
        setamount("");
        setcategory("");
        setdate("");
    }
    return(
<div className="formdata">

    <form onSubmit={onsubmit}>
    <h3>Add new transaction</h3>
    
    <label htmlFor="name">Name:
        <input type="text" id="name"value={names}   onChange={(e) => setnames(e.target.value)}></input>
        </label>
     <label htmlFor="amount">Amount:
        <input type="text" id="amount"value={amount} onChange={(e) => setamount(e.target.value)}></input>
        </label>
        
        <label htmlFor="category">Category:
        <input type="text" id="category"value={category}  onChange={(e) => setcategory(e.target.value)}></input>
        </label>
      
        <label htmlFor="date">Date:
        <input type="text" id="date"value={date} onChange={(e) => setdate(e.target.value)}></input>
        </label>
        <button>Submit</button>
    </form>
</div>
    )
}