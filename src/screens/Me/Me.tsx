import { IonAvatar, IonButton, IonContent, IonIcon, IonImg, IonItem, IonList, IonPage, IonText } from '@ionic/react'
import React from 'react'
import HeaderTitle from '../../components/HeaderTitle'

import Profile from "../../assets/svgs/undraw_profile_pic_ic5t.svg"
import { logOut, personCircle } from 'ionicons/icons'

const Me = () => {
  return (
    <IonPage>
      <HeaderTitle title='Profile' />
      <IonContent className='ion-paddding'>

        <section className="text-center ion-text-center">
          <IonAvatar className='mx-auto'>
            <IonImg src={Profile} alt="user" />
          </IonAvatar>
          <h3 className="mt-3">John Doe</h3>
          <h5>dspt/com/hnd/1212/23232</h5>
        </section>


        <section>
          <div className="d-flex justify-content-between"></div>
          <IonList>
            <IonItem>
              <IonText slot='start'>Email</IonText>
              <IonText slot='end'>John</IonText>
            </IonItem>
            <IonItem>
              <IonText slot='start'>Level</IonText>
              <IonText slot='end'>John</IonText>
            </IonItem>
            <IonItem>
              <IonText slot='start'>Gender</IonText>
              <IonText slot='end'>Male</IonText>
            </IonItem>
            <IonItem>
              <IonText slot='start'>First Name</IonText>
              <IonText slot='end'>John</IonText>
            </IonItem>
            <IonItem>
              <IonText slot='start'>First Name</IonText>
              <IonText slot='end'>John</IonText>
            </IonItem>
          </IonList>

          <div className="ion-padding">
            <IonButton shape='round' className='fill mt-4' expand='block' size='large'>
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