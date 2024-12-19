import React, { useState } from "react";
import FormContext from "./context";

function Provider({ children }) {
  const [subdata, setSubdata] = useState(null);
  const [formArr, setFormArr] = useState([])

  return (
    <FormContext.Provider value={{ subdata, setSubdata, formArr, setFormArr }}>
      {children}
    </FormContext.Provider>
  );
}

export default Provider;
