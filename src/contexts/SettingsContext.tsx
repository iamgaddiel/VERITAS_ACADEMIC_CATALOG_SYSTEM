import React, { createContext, useState } from 'react'
import PocketBase from 'pocketbase'


export type SettingsContextType = {
  pb: PocketBase
  DEBUG: boolean
  showTabs: boolean
  setshowTabs: React.Dispatch<React.SetStateAction<boolean>>
}


export const SettingsContext = createContext<SettingsContextType | null>(null)


function SettingsProvider({ children }: { children: any }) {

  // states
  const [showTabs, setshowTabs] = useState(false)


  // 
  const DEBUG = true

  const pb = new PocketBase(DEBUG ? "http://127.0.0.1:8090" : "https://")

  return (
    <SettingsContext.Provider value={{
      pb,
      DEBUG,
      showTabs,
      setshowTabs
    }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider