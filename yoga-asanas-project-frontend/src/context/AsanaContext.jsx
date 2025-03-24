  import {createContext,useState} from "react";     


 export const AsanaContext=createContext();

 export const AsanaProvider=({children})=>{
    const [selectedAsanas,setSelectedAsanas]=useState([]);
    const[selectedYogaSetId,setSelectedYogaSetId]=useState();

    const selectAsana=(asana,yogaSetId)=>{
        console.log("selected",asana);
        if(!selectedAsanas.some((a)=>a.id===asana.id)){
            setSelectedAsanas([...selectedAsanas,asana]);
        }
        if(!selectedYogaSetId){
setSelectedYogaSetId(yogaSetId)
        }
    };
    const removeAsana=(id)=>{
        setSelectedAsanas(selectedAsanas.filter((a)=>a.id!==id));
    };
    return(
        <AsanaContext.Provider value={{selectedAsanas,selectAsana,removeAsana,selectedYogaSetId}}>
            {children}
        </AsanaContext.Provider>
    );

 };
 export default {AsanaProvider}