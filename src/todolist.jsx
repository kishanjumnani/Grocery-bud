import React, { useState } from "react";
import './style.css'

function Todolist(){
    const [itemsvalue,setitemsvalue] =useState("");
    const [itemslist,setitemslist] =useState([]);
    function additems(){
        // setitemslist([ ...itemslist,itemsvalue]);
        
        setitemslist((itemslist)=>{
            const updatelist=[...itemslist,itemsvalue];
            console.log(updatelist);
            setitemsvalue("");
            return updatelist;
        })
    }

        function handledelete(index){
            const updatelistdata =itemslist.filter((delitems,ind)=>{
                return index != ind;
                
            })
            setitemslist(updatelistdata);
            console.log(updatelistdata);  
    }
    function handlechnagestyle(e,index){
        const changelistdata=itemslist.map((ele,ind)=>{
          
      
            
          
            
        
    }
    return(
        <>
     
        <div className="container">
            <h1>Grocery Bud</h1>
            <div className="inputfield">
                <input type="text" placeholder="add items" value={itemsvalue} onChange={(e)=>
                    setitemsvalue(e.currentTarget.value)}/>
                <button onClick={additems}>Add</button>
            </div>
            <div className="showlist">
                <ul>
                {itemslist.map((data, index)=> {
                    return (
                        <div className="shwlist" key={index}>
                        <input type="checkbox" onClick={()=>handlechnagestyle(e,index)}/>
                        <li>{data}
                        <button onClick={()=>handledelete(index)}>Delete</button>
                        </li>
                        
                        </div>

                    )

                })}
                </ul>
                

            </div>
        </div>
        </>
    )

}
export default  Todolist;