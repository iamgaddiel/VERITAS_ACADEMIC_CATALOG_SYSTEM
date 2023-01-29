import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect } from 'react'
import { SettingsContext, SettingsContextType } from '../../contexts/SettingsContext'

import './Dashboard.css'

import Img from '../../assets/svgs/undraw_profile_pic_ic5t.svg'
import Thubnail from '../../assets/images/wordpress-icon-support@2x-9dffb754b5c6dae9b313ad16b7930b55.webp'

import { book, bookmark, chevronForward, newspaperSharp, paperPlane, pencil, personCircleOutline } from 'ionicons/icons'
import HeaderTitle from '../../components/HeaderTitle'
import SpaceBetween from '../../components/style/SpaceBetween'
import SpaceEvently from '../../components/style/SpaceEvently'

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
                </section>


                <section className='mt-4'>
                    <SpaceEvently>
                        <IonCard routerDirection='forward' routerLink='/assignments' className='ion-padding' color="success">
                            <IonCardContent class='text-center'>
                                <IonIcon icon={book} size="large" />
                                <p>Class Assignments</p>
                            </IonCardContent>
                        </IonCard>
                        <IonCard routerDirection='forward' routerLink='/questions' className='ion-padding' color={"success"}>
                            <IonCardContent class='text-center'>
                                <IonIcon icon={newspaperSharp} size="large" />
                                <p>Past Questions</p>
                            </IonCardContent>
                        </IonCard>
                    </SpaceEvently>
                </section>


                <section className='mt-4'>
                    <SpaceBetween className='ion-padding-horizontal'>
                        <strong>Materials</strong>
                        <IonIcon src={chevronForward} />
                    </SpaceBetween>

                    <IonList lines='none'>
                        <IonItem detail>
                            <IonLabel>
                                <h3>Home Jornal</h3>
                                <p>12:30 pm</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem detail>
                            <IonLabel>
                                <h3>Home Jornal</h3>
                                <p>12:30 pm</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem detail>
                            <IonLabel>
                                <h3>Home Jornal</h3>
                                <p>12:30 pm</p>
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </section>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard