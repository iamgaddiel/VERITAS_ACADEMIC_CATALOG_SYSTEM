import React, { createContext, useState } from 'react'
import PocketBase from 'pocketbase'
import { Storage } from '@ionic/storage';
import Settings from '../helpers/settings'






const { pb, storage, DEBUG } = Settings()

export const SettingsContext = createContext<SettingsContextType | null>(null)


function SettingsProvider({ children }: { children: any }) {

  // states
  const [showTabs, setshowTabs] = useState(false)


  return (
    <SettingsContext.Provider value={{
      pb,
      showTabs,
      setshowTabs,
      storage,
      DEBUG
    }}>
      {children}
    </SettingsContext.Provider>
  )
}

export type SettingsContextType = {
  pb: PocketBase
  showTabs: boolean
  setshowTabs: React.Dispatch<React.SetStateAction<boolean>>
  storage: Storage
  DEBUG: boolean
}

export default SettingsProvider
