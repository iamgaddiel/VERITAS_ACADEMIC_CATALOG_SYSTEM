import { IonPage, IonContent, IonList, IonItem, IonLabel, IonIcon, IonFab, IonFabButton, IonModal } from '@ionic/react'
import { book, cloudUploadSharp, library, text } from 'ionicons/icons'
import React, { useState } from 'react'
import BackHeader from '../../components/BackHeader'
import SpaceBetween from '../../components/style/SpaceBetween'

const Questions = () => {
    const [showModal, setShowModal] = useState(false)




    /**
     * -----------------------------------------------------------
     * ------------------ Functions ] ---------------------------
     * -----------------------------------------------------------
     */
    function handleFormSubmit() {
        // set
    }


    return (
        <IonPage>
            <BackHeader title='Past Questions' />

            <IonContent fullscreen className='ion-padding'>

                <IonFab vertical='bottom' horizontal='end'>
                    <IonFabButton color={"success"} onClick={() => setShowModal(true)}>
                        <IonIcon icon={cloudUploadSharp} />
                    </IonFabButton>
                </IonFab>

                <section className='ion-padding'>
                    <SpaceBetween>
                        <h6>All</h6>
                        <span>30</span>
                    </SpaceBetween>
                </section>


                <section>
                    <IonList>
                        <IonItem download='https://' detail>
                            <IonLabel>
                                <span>@iamgaddiel</span>
                                <h1 className='mt-2'><IonIcon icon={library} slot="start" /> { }  Flutter</h1>
                                <SpaceBetween>
                                    <small> COM 213</small>
                                    <small>12:00 pm</small>
                                </SpaceBetween>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </section>


                <IonModal breakpoints={[0.25, 0.50, 0.75]} isOpen={showModal} className="text-light" color={"success"}>
                    <IonContent className='ion-padding'>
                        <h1>Hello</h1>
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    )
}

export default Questions