import React, { useContext, useEffect, useState,createContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = createContext()
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value='user context'>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
