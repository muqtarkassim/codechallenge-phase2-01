import React from "react";
export default function Item(props){
   
return(
   <tr>
<td>{props.name}</td>
<td>{props.amount}</td>
<td>{props.category}</td>
<td>{props.date}</td>
<td> <button onClick={() => props.handleDelete(props.id)}>X</button></td>
   </tr>
)
} 
