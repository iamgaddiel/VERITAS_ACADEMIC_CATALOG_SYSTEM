import { IonButton, IonContent, IonIcon, IonInput, IonPage } from '@ionic/react'
import { cloudUpload } from 'ionicons/icons'
import React from 'react'
import BackHeader from '../../components/BackHeader'

const QuestionAdd = () => {
  return (
    <IonPage>
        <BackHeader title='Upload Question' />
        <IonContent className='ion-padding' fullscreen>
            <form action="">
                
                <IonInput type='text' placeholder='Course Title' className='my-3 border rounded-4'/>
                <IonInput type='text' placeholder='Course Code' className='my-3 border rounded-4'/>
                <IonInput type='text' placeholder='Academic Session' className='my-3 border rounded-4'/>
                <IonInput type='text' placeholder='Course Title' className='my-3 border rounded-4'/>

                <IonButton type='submit' expand='full' className='fill' size='large' shape='round'>
                    <IonIcon icon={cloudUpload} slot="start" />
                    Upload
                </IonButton>
            </form>
        </IonContent>
    </IonPage>
  )
}

export default QuestionAdd