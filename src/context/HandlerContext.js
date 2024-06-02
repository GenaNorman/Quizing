import React, { createContext, useContext, useState } from "react";

const handlerContext = createContext();
function HandlerContext({ children }) {
  const [toggleNav, setToggleNav] = useState(true);
  function hidesidebar(params) {
    setToggleNav(!toggleNav);
  }

  return (
    <handlerContext.Provider
      value={{
        hidesidebar,
        toggleNav,
      }}
    >
      {children}
    </handlerContext.Provider>
  );
}
function useProvider() {
  const context = useContext(handlerContext);
  if (context === undefined)
    throw new Error("Post conntext was used outside the nomination provider");
  return context;
}

export { HandlerContext, useProvider };
