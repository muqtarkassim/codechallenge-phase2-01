import React, { useEffect, useState } from "react";
import ItemList from "./itemList";
import FormInfo from "./formInfo";
import CategoryList from "./CategoryList";
export default function App(){
    
    const [allItems,setallItems]=useState([])
    const [datas, setData] = useState([]);
 useEffect(() => {
        fetch("http://localhost:8001/transactions")
          .then((res) => res.json())
          .then((data) =>{ 
           setData(data)
         // setFilteredItems(data)
          setallItems(data)
        })
          ;
    },[]);
     
   const handleSubmit=(collectedData)=>{
 
    fetch('http://localhost:8001/transactions', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(collectedData)
}).then(res => res.json())
  .then(data => {
    setallItems([...allItems ,data])
    setData([...datas,data])
    
   } );
   }
   // 
   
//////////////
    return(
      
        <div> 
      
        <h1>Transactions details</h1>
        <div className="searchc">
            <h5>search category
            <span><CategoryList allitems={allItems} setallItems={setallItems} data={datas}/></span></h5>
        </div>
        <ItemList allItems={allItems} setallItems={setallItems}/>
        <FormInfo handleSubmit={handleSubmit}/>
        </div>
    ) 
}