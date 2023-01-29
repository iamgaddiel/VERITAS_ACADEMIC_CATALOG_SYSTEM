import { IonContent, IonFab, IonFabButton, IonIcon, IonPage, IonText } from '@ionic/react'
import { download } from 'ionicons/icons'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import BackHeader from '../../components/BackHeader'
import { SettingsContext } from '../../contexts/SettingsContext'

const AssignmentDetail = () => {
    const { id }: RouteParamType = useParams()

    const [assignmentTitle, setAssignmentTitle] = useState("Assignment 1")


    return (
        <IonPage>
            <BackHeader title={assignmentTitle} />
            <IonContent className='ion-padding'>

                <IonFab vertical='bottom' horizontal='end'>
                    <IonFabButton color={"success"} download={"https://"}>
                        <IonIcon icon={download} />
                    </IonFabButton>
                </IonFab>


                <IonText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam id minima corporis! Deserunt iste perspiciatis excepturi maiores, corporis atque laboriosam.z</IonText>
            </IonContent>
        </IonPage>
    )
}


type PropType = {}

type RouteParamType = {
    id: string
    title: string
}

export default AssignmentDetail