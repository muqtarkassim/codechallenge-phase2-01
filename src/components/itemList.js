import React from "react";
import Item from "./item";


export default function ItemList({allItems,setallItems}){
    const handleDelete = (id) => {
        // Make a DELETE request to delete the item with the specified id
        fetch(`http://localhost:8001/transactions/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then(() => {
            // Remove the deleted item from the state
            setallItems((allItems) => allItems.filter((item) => item.id !== id));
          });
      };
   const itemsData= allItems.map((items)=> <Item key={items.id} name={items.description} amount={items.amount} category={items.category} date={items.date} id={items.id} handleDelete={handleDelete}/>)
   
   
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