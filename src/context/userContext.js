import { useState, createContext } from 'react';

export const UserContext = createContext();
const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const addUser = (user) => {
        setUsers((prevUser) => [...prevUser, user]);
    }
    return(
        <UserContext.Provider value={{users,setUsers, addUser}}>
            {children}
        </UserContext.Provider>
    )
}
// read once exactly what is happening here
export default UserContextProvider;