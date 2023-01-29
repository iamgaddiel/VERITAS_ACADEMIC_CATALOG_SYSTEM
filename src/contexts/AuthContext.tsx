import { Record, RecordAuthResponse } from 'pocketbase'
import React, { createContext, useContext } from 'react'
import { CreateUserType } from '../@types/users'
import { USRS_COLLECTION } from '../utils/keys'
import { SettingsContext, SettingsContextType } from './SettingsContext'




export type AuthContextType = {
  authenticate: (email: string, password: string) => Promise<RecordAuthResponse<Record>>
  createUser: (data: CreateUserType) => Promise<Record>
  logout: () => void
}



export const AuthContext = createContext<AuthContextType | null>(null)





function AuthProvider({ children }: { children: any }) {

  const { pb } = useContext(SettingsContext) as SettingsContextType


  async function authenticate(email: string, password: string) {
    const authData = await pb.collection(USRS_COLLECTION).authWithPassword(
      email,
      password
    )
    return authData
  }

  async function createUser(data: CreateUserType) {
    const record = await pb.collection(USRS_COLLECTION).create(data)
    return record
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