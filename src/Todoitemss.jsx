

import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function showlist({text,id,isComplete,handledelete,toggle}){
return(
   <>
   <div className="flex justify-space-between gap-[2rem]">
   <input type="checkbox" onClick={()=>{toggle(id)}} className="px-[1rem] rounded-[50%]">
   </input>
   <span className={`${isComplete? "line-through" :""}`}>{text}</span> 
   <button onClick={()=>handledelete(id)}><DeleteIcon/></button>
   </div>
   
   </>
)
}
export default showlist;