import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

const AuthContext = createContext({
    //initial state of the context
})

export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{
        user: 1,
        }
    }>{children}</AuthContext.Provider>
  )
}

export default function useAuth(){
    return useContext(AuthContext);
}
