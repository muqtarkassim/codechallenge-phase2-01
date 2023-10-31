import React, { useState } from "react";

export default function CategoryList({allitems,setallItems,data}){



   const[options,setoptions]=useState("")
   const handlecategory = (e) => {
       e.preventDefault();
       const category = options.trim();
   
       if (category) {
         const arraySelected = data.filter((item) =>
           item.category.toLowerCase() === category.toLowerCase()
           
         );
   
         if (arraySelected.length > 0) {
           setallItems(arraySelected);
       
         } else {
           alert("No items found in the selected category.");
         }
   
         
         setoptions("");
       } else {
   
         setallItems(allitems);
       }
     };
      

    return(
        <div>
<form id="catform" onSubmit={handlecategory}>
<input type="text" value={options} placeholder="search category" onChange={(e)=>{setoptions(e.target.value)}}></input>

</form>

        </div>
    )
}