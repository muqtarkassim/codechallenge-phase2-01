import React from "react";
export default function Item(props){
    function handleDelete(){
        alert("cliked")
    }
return(
   <tr>
<td>{props.name}</td>
<td>{props.amount}</td>
<td>{props.category}</td>
<td>{props.date}</td>
<td><button onClick={handleDelete}>X</button></td>
   </tr>
)
} 
