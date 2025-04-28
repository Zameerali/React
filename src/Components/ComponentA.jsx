import ComponentB from "./ComponentB";
import React from "react";
import { useState,createContext } from "react";

export const UserContext = createContext(null)

function ComponentA() {

    const [user, setUser] = useState("Zameer");


  return (
    <div className="box">
      <h1>Component A</h1>
        <h2>Hello : {user}</h2>
        <UserContext.Provider value={{user,setUser}}>
        <ComponentB />
        </UserContext.Provider>
    </div>
  );
}

export default ComponentA;