import { IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import { useState } from 'react'
import BackHeader from '../../components/BackHeader'
import SpaceBetween from '../../components/style/SpaceBetween'

const Notes = () => {
    const [notes, setNotes] = useState([])


    return (
        <IonPage>
            <BackHeader title='Notes' />

            <IonContent fullscreen className='ion-paddding'>
                <IonList>
                    <IonItem detail routerLink='/note/23' routerDirection='forward'>
                        <IonLabel>
                            <SpaceBetween>
                                <h1>Flutter</h1>
                                <span>12 - May - 2022</span>
                            </SpaceBetween>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eius ratione aliquam non, consequatur ut iste. Amet nostrum cupiditate odit qui at illo, ipsum possimus temporibus mollitia tempore, aperiam laboriosam.</p>
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>

        </IonPage>
    )
}

export default Notes