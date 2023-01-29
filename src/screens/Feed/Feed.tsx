import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonIcon, IonImg, IonInput, IonItem, IonList, IonPage, IonText, IonToolbar } from '@ionic/react'
import { send } from 'ionicons/icons'
import React from 'react'
import HeaderTitle from '../../components/HeaderTitle'


import Profile from "../../assets/svgs/undraw_profile_pic_ic5t.svg"

const Feed = () => {
  return (
    <IonPage>
      <HeaderTitle title='Class Feed' />
      <IonContent className='ion-paddding' fullscreen>


        <section className="feeds ion-padding ion-no-border">

          {/* message from others  */}
          <div className="d-flex">
            <div className="w-25 h-25">
              <IonImg src={Profile} className="rounded-circle" />
            </div>
            <div className='bg-light card rounded-4'>
              <IonCardHeader className='d-flex align-items-center justify-content-between'>
                <IonCardTitle className='fs-small text-muted'>
                  <div className='d-flex align-items-center'>
                    <strong>
                      John Peter
                    </strong>
                  </div>
                </IonCardTitle>
                <small>12:00pm</small>
              </IonCardHeader>
              <IonCardContent>
                <big className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque ab vero doloribus.</big>
              </IonCardContent>
            </div>
          </div>


          {/* message from self  */}
          <div className="d-flex mt-3 justify-content-evenly">

            <div className='bg-light card rounded-4'>
              <IonCardHeader className='d-flex align-items-center justify-content-between'>
                <IonCardTitle className='fs-small text-muted'>
                  <div className='d-flex align-items-center'>
                    <strong className=''>
                      John Peter
                    </strong>
                  </div>
                </IonCardTitle>
                <small className='text-muted'>12:00pm</small>
              </IonCardHeader>
              <IonCardContent>
                <big className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque ab vero doloribus.</big>
              </IonCardContent>
            </div>

            <div className="w-25 h-25">
              <IonImg src={Profile} className="rounded-circle" />
            </div>
          </div>


        </section>
      </IonContent>

      <IonFooter className='ion-padding'>
        <IonToolbar>
          <IonInput type='text' name='message' placeholder='Enter message' className='border rounded-4' />
          <IonButton fill='clear' className='fill' slot='end' shape='round' size='default'>
            <IonIcon icon={send} />
          </IonButton>
        </IonToolbar>
      </IonFooter>
      
    </IonPage>
  )
}

export default Feed