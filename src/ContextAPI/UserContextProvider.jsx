import { useState } from "react";
import UserContext from "../ContextAPI/UserContext";
import { useEffect } from "react";

const UserContextProvider = ({ children }) => {

  const [username, setUsername] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUsername(currentUser.username);
    }
  }, []);


  return (<UserContext.Provider value={{ username}}>
    {children}
  </UserContext.Provider>);

};

export default UserContextProvider;