import { Record, RecordAuthResponse } from 'pocketbase'
import React, { createContext, useContext } from 'react'
import { CreateUserType } from '../@types/users'
import { USRS_COLLECTION } from '../utils/keys'
import { SettingsContext, SettingsContextType } from './SettingsContext'





export const AuthContext = createContext<AuthContextType | null>(null)



const AuthProvider: React.FC<{ children: any }> = ({ children }) => {


  const { pb } = useContext(SettingsContext) as SettingsContextType


  async function authenticate(email: string, password: string) {
    try {
      const authData = await pb.collection(USRS_COLLECTION).authWithPassword(
        email,
        password
      )
      return authData

    } catch (err) {
      return err
    }
  }

  async function createUser(data: CreateUserType) {
    try {
      const user = await pb.collection(USRS_COLLECTION).create(data)
      return user
    }
    catch (err: any) {
      if (err) {
        return err
      }
    }
  }


  function logout() {
    pb.authStore.clear()
  }


  async function verifyEmail(email: string) {

  }


  async function requestPasswordReset(collection: string, email: string) {

  }


  async function confirmPasswordReset(collection: string, token: string, newPassword: string, confirmNewPassword: string) {

  }


  return (
    <AuthContext.Provider value={{
      authenticate,
      createUser,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider


export type AuthContextType = {
  authenticate(email: string, password: string): Promise<unknown>
  createUser: (data: CreateUserType) => Promise<unknown>
  logout: () => void
}

