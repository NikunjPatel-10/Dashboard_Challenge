import React, { useState } from "react";
import Context from "./Context";
function ContextProvider(props) {
  const [search, setSearch] = useState("");

  const searchCtx = {
    search,
    setSearch,
  };
  return (
    <Context.Provider value={searchCtx}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
