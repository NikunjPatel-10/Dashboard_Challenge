import React from "react";

const Context = React.createContext({
  search: "",
  setSearch: () => {},
});
export default Context;
