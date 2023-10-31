import React from "react";
import Item from "./item";


export default function ItemList({allItems}){
   
   const itemsData= allItems.map((items)=> <Item key={items.id}name={items.description} amount={items.amount} category={items.category} date={items.date}/>)
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            
           {itemsData}
            </tbody>
        </table>
    )
}