import React, { useEffect, useRef, useState } from "react";
import './style.css'
import ItemsTodolist from './Todoitemss.jsx';


function Todolistf(){
    // const [itemsvalue,setitemsvalue] =useState("");
    const [itemslist,setitemslist] =useState([]);
    const inputref= useRef();
    


   
    function additems(){
        const inputText = inputref.current.value.trim();
        if(inputText==="") return null;
        const newlist={
            id:Date.now(),
            text:inputText,
            isComplete:false,
        }
        setitemslist((prev)=>[...prev,newlist]);
        inputref.current.value="";
        
            

        

      
        
        // setitemslist([ ...itemslist,itemsvalue]);
        
        
        // setitemslist((itemslist)=>{
        //     const updatelist=[...itemslist,itemsvalue];
        //     console.log(updatelist);
        //     setitemsvalue("");
        //     return updatelist;
        // })
    }

        function handledelete(id){
            const updatelistdata =itemslist.filter((delitems)=>{
                return id != delitems.id;
                
            })
            setitemslist(updatelistdata);
            console.log(updatelistdata);  
    }
    function toggle(id){
       setitemslist((prevtodo)=>{
        return prevtodo.map((updatelist)=>{
            if(updatelist.id ===id) {return {...updatelist,isComplete: !updatelist.isComplete}}
            return updatelist;
        })
       })
    }
    useEffect(()=>{
        console.log(itemslist)
    },[itemslist])
  
    return(
        <>
     <div className="wrap w-[100vw] h-[100vh]">
        <div className="container flex flex-col mx-[30%] my-[10%] gap-[2rem] shadow-lg w-[30%] p-[2rem]">
            <h1 className="text-[2rem]">Grocery Bud</h1>
            <div className="inputfield flex gap-[2rem]">
                <input type="text" placeholder="Add items" ref={inputref} className="outline"/>
                <button onClick={additems} className="rounded-[10px] bg-green-300 px-[1rem]">Add</button>
            </div>
            <div className="showlist">
               
                {itemslist.map((data, index)=> {
                    return (
                      <ItemsTodolist key={index} text={data.text} id={data.id} isComplete={data.isComplete} handledelete={handledelete}  toggle={toggle}/>
                    )

                })}
               
                

            </div>
        </div>
        </div>
        </>
    )

}
export default  Todolistf;