import { createContext, useState, useContext } from 'react'
import { account, ID } from '../lib/appwrite'
export const UserContext = createContext()

 export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(email, password){
        try {
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        }   catch (error) {
            console.log(error.message)
        }
    }
    async function register(email, password) {
  try {
    console.log("Registering user with:", email);

    // Create the user account
    await account.create(ID.unique(), email, password);

    // Before logging in, check if a session already exists
    const currentSession = await account.getSession('current').catch(() => null);

    if (!currentSession) {
      // Create a session only if there isn't one
      await account.createEmailPasswordSession(email, password);
    }

    // Fetch user details
    const response = await account.get();
    setUser(response);
    console.log("User registered and logged in:", response);
  } catch (error) {
    console.log(error.message);
  }
}

    async function logout(){

    }

    return(
        <UserContext.Provider value = {{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
 }