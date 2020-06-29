import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function Store({ children }) {
  const [testStore, setTestStore] = useState([1, 2, 3]);

  return (
    <AppContext.Provider value={{ testStore, setTestStore }}>
      {children}
    </AppContext.Provider>
  );
}
