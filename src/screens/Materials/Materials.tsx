import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonIcon, IonItem, IonList, IonPage, IonText } from '@ionic/react'
import { book } from 'ionicons/icons'
import React from 'react'
import HeaderTitle from '../../components/HeaderTitle'

const Materials = () => {
    return (
        <IonPage>
            <HeaderTitle title='Material' />
            <IonContent className='ion-padding' fullscreen>

                {/* TODO: display if user is a staff */}
                <IonButton className='fill' expand='block' shape='round'>
                    <IonIcon icon={book} slot="start"/> 
                    Upload Material
                </IonButton>


                <section className="mt-5">
                    <IonCard className='bg-light' routerDirection='forward' routerLink='/'>
                        <IonCardHeader className='d-flex align-items-center justify-content-between'>
                            <IonCardTitle className='h2'>Hello There</IonCardTitle>
                            <span>12:00pm</span>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonText className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint itaque ab vero doloribus. Corporis pariatur enim, nam mollitia eaque praesentium.</IonText>
                        </IonCardContent>
                    </IonCard>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default Materials