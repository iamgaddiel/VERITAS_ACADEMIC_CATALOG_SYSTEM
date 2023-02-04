import { IonAlert } from '@ionic/react'
import React from 'react'



const ShowAlert= ({ isOpen, setIsOpen, message }: PropType) => {
    return (
        <IonAlert
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            message={message}
            buttons={['Ok']}
        />
    )
}


type PropType = {
    isOpen: boolean
    message: string
    setIsOpen:  (value: React.SetStateAction<boolean>) => void | void
}


export default ShowAlert