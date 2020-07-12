import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function Store({ children }) {
  const [testStore, setTestStore] = useState([1, 2, 3]);
  var apiHost = "https://smileupapi.eddiebatkinson.com";
  const input = {
    email: "tonya@smileupfoundation.org",
    password: "password123",
  };
  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = () => {
    fetch(`${apiHost}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "tonya@smileupfoundation.org",
        password: "password123",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <AppContext.Provider value={{ testStore, setTestStore }}>
      {children}
    </AppContext.Provider>
  );
}
