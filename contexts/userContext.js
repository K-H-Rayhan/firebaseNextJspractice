import React, { useEffect } from "react";
import app from "../db/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const userConext = React.createContext();

export const UserProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = React.useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser(user);
      }
    });
  }, []);

  return (
    <userConext.Provider value={[user, setUser]}>
      {children}
    </userConext.Provider>
  );
};

export default UserProvider;
