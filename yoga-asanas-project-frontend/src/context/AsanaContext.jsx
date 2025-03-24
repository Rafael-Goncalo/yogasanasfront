import {createContext,useState} from "react";
 export const AsanaContext=createContext();

 export const AsanaProvider=({children})=>{
    const [selectedAsanas,setSelectedAsanas]=useState([]);

    const selectAsana=(asana)=>{
        if(!selectedAsanas.some((a)=>a.id===asana.id)){
            setSelectedAsanas([...selectedAsanas,asana]);
        }
    };
    const removeAsana=(id)=>{
        setSelectedAsanas(selectedAsanas.filter((a)=>a.id!==id));
    };
    return(
        <AsanaContext.Provider value={{selectedAsanas,selectAsana,removeAsana}}>
            {children}
        </AsanaContext.Provider>
    );

 };