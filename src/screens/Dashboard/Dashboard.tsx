import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect } from 'react'
import { SettingsContext, SettingsContextType } from '../../contexts/SettingsContext'

import './Dashboard.css'

import Img from '../../assets/svgs/undraw_profile_pic_ic5t.svg'
import Thubnail from '../../assets/images/wordpress-icon-support@2x-9dffb754b5c6dae9b313ad16b7930b55.webp'

import { chevronForward, pencil, personCircleOutline } from 'ionicons/icons'
import HeaderTitle from '../../components/HeaderTitle'

const Dashboard: React.FC = () => {

    const { showTabs, setshowTabs } = useContext(SettingsContext) as SettingsContextType

    useEffect(() => {
        setshowTabs(true)
    }, [])


    return (
        <IonPage>
            <HeaderTitle title='Dashboard' />

            <IonContent className='ion-padding'>


                <section className="banner ion-padding">

                    <div className="d-flex align-items-center">
                        <IonAvatar>
                            <IonImg src={Img} alt={""} />
                        </IonAvatar>
                        <div className='ion-padding-start'>
                            <h1 className='text-light'>John Doe</h1>
                            <span className="text-light lead">DSPT/HND/2121/1232323</span> <br />
                            {/* <span className="text-light lead">Veritas University</span> */}
                        </div>
                    </div>

                    <div className="text-center">
                        <IonButton fill='default' shape='round' className='mt-4'>
                            <IonIcon icon={personCircleOutline} slot="start" />
                            Profile
                        </IonButton>
                    </div>
                </section>


                <section className='mt-5 d-flex'>

                    <IonCard className='my-2 bg-transparent w-50' routerDirection='forward' routerLink='/materials'>
                        <IonImg src={Thubnail} alt={"comment"} />
                        <IonCardContent className='d-flex justify-content-between align-item-center'>
                            <IonCardTitle className='text-muted'>Assigment</IonCardTitle>
                            <IonIcon icon={chevronForward} size="small" />
                        </IonCardContent>
                    </IonCard>


                    <IonCard className='my-3 w-50 bg-transparent' routerDirection='forward' routerLink='/past-question'>
                        <IonImg src={Thubnail} alt={"comment"} />
                        <IonCardContent className='d-flex justify-content-between align-item-center'>
                            <IonCardTitle className='text-muted'>Past Question</IonCardTitle>
                            <IonIcon icon={chevronForward} size="small" />
                        </IonCardContent>
                    </IonCard>

                </section>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard