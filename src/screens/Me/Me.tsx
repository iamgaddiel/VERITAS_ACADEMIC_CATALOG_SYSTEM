import { IonAvatar, IonButton, IonContent, IonIcon, IonImg, IonItem, IonList, IonPage, IonText } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'

import Profile from "../../assets/svgs/undraw_profile_pic_ic5t.svg"
import { logOut, personCircle } from 'ionicons/icons'
import { AuthContext, AuthContextType } from '../../contexts/AuthContext'
import { StorageContext, StorageContextType } from '../../contexts/StorageContext'
import { USER } from '../../helpers/keys'
import { useHistory } from 'react-router'
import { StoredUser, UserCollectionType } from '../../@types/users'
import { getUserSchoolId } from '../../helpers/utils'
import { SettingsContext, SettingsContextType } from '../../contexts/SettingsContext'




const Me = () => {
  const history = useHistory()

  const { logout, getStoredUser } = useContext(AuthContext) as AuthContextType
  const { clearData } = useContext(StorageContext) as StorageContextType
  const { setshowTabs } = useContext(SettingsContext) as SettingsContextType

  const [user, setUser] = useState<UserCollectionType | null>(null)



  useEffect(() => {
    getUser()
  }, [])


  async function getUser() {
    const res: StoredUser = await getStoredUser()
    if (res !== null) setUser(res.record)
  }


  async function logoutUser() {
    clearData(USER)
    logout()
    setshowTabs(false)
    history.push('/login')
  }



  return (
    <IonPage>
      <HeaderTitle title='Profile' />
      <IonContent className='ion-paddding'>

        <section className="text-center ion-text-center">
          <IonAvatar className='mx-auto'>
            <IonImg src={Profile} alt="user" />
          </IonAvatar>
          <h3 className="mt-3">{user?.name}</h3>
          <h5>{getUserSchoolId(user!, user?.role!)}</h5>
        </section>


        <section>
          <div className="d-flex justify-content-between"></div>
          <IonList>
            <IonItem>
              <IonText slot='start'>Email</IonText>
              <IonText slot='end'>{user?.email}</IonText>
            </IonItem>
            {/* <IonItem>
              <IonText slot='start'>Gender</IonText>
              <IonText slot='end'>{user?.gender}</IonText>
            </IonItem> */}
          </IonList>

          <div className="ion-padding">
            <IonButton
              shape='round'
              className='fill mt-4'
              expand='block'
              size='large'
              onClick={() => logoutUser()}
            >
              <IonIcon icon={logOut} slot="start" />
              Logout
            </IonButton>
          </div>


        </section>
      </IonContent>
    </IonPage>
  )
}

export default Me