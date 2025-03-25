import { createContext, useState } from "react";

export const AsanaContext = createContext(); //creates a context object you ll use to access or provide context in other compnent

export const AsanaProvider = ({ children }) => {
  // provider : wraps your app and provides shared data. Children refers to all the compnents insdie provider
  const [selectedAsanas, setSelectedAsanas] = useState([]); // holds the list of asanas tha user selects
  // selected asanas- keeps track of which asanas user selects

  const selectAsana = (asana) => {
    console.log("selected", asana);
    if (!selectedAsanas.some((a) => a.id === asana.id)) {
      setSelectedAsanas([...selectedAsanas, asana]); // this adds an asanas to selected Asanas only if its not already added(prevents duplicates)
    }
  };
  const removeAsana = (id) => {
    setSelectedAsanas(selectedAsanas.filter((a) => a.id !== id)); // this removes the selected asanas by filtering out the one with given id.
  };
  return (
    //shares selectedAsanas, selectAsana,removeAsana
    <AsanaContext.Provider value={{ selectedAsanas, selectAsana, removeAsana }}>
      {children}
    </AsanaContext.Provider>
  );
};
export default { AsanaProvider };
