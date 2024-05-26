import { createContext, useContext } from "react";

const statesContext = createContext();

function StatesContext({ children }) {
  return <statesContext.Provider value={{}}>{children}</statesContext.Provider>;
}
function useProvider() {
  const context = useContext(statesContext);
  if (context === undefined)
    throw new Error("Post conntext was used outside the nomination provider");
  return context;
}
export { StatesContext, useProvider };
