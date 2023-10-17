import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});


export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);

    const fetchUserData = () => {
        axios.get('/profile')
          .then(({ data }) => {   
            setUser(data); 
          })
          .catch((error) => {
            // Handle errors if necessary
            console.error(error);
          });
      };

    useEffect(() => {
        // Fetch user data initially
        fetchUserData();
    }, [])
    return (
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    )
}