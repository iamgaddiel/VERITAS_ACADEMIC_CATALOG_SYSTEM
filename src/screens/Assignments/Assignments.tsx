import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import { book } from 'ionicons/icons'
import React from 'react'
import BackHeader from '../../components/BackHeader'
import SpaceBetween from '../../components/style/SpaceBetween'

const Assignments = () => {
    return (
        <IonPage>
            <BackHeader title='Assignments' />

            <IonContent fullscreen className='ion-padding'>

                <section className='ion-padding'>
                    <SpaceBetween>
                        <h6>All</h6>
                        <span>30</span>
                    </SpaceBetween>
                </section>


                <section>
                    <IonList>
                        <IonItem routerDirection='forward' routerLink='/assignment/1' detail>
                            <IonLabel>
                                
                                <SpaceBetween>
                                    <h3> <IonIcon icon={book} slot="start" /> { } Origin Of Flutter</h3>
                                    <small>12:00 pm</small>
                                </SpaceBetween>
                                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, error praesentium tempore et autem commodi culpa inventore quibusdam illum! Consequatur.</p>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default Assignments