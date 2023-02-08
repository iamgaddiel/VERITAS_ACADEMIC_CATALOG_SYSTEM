import { IonAvatar, IonCard, IonCardContent, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRouterLink } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import { SettingsContext, SettingsContextType } from '../../contexts/SettingsContext'

import './Dashboard.css'

import Img from '../../assets/svgs/undraw_profile_pic_ic5t.svg'

import { book, chevronForward, newspaperSharp, pencilOutline } from 'ionicons/icons'
import HeaderTitle from '../../components/HeaderTitle'
import SpaceBetween from '../../components/style/SpaceBetween'
import SpaceEvently from '../../components/style/SpaceEvently'
import { AuthContext, AuthContextType } from '../../contexts/AuthContext'
import { StoredUser, UserCollectionType } from '../../@types/users'

const Dashboard: React.FC = () => {

    const { setshowTabs } = useContext(SettingsContext) as SettingsContextType
    const { getStoredUser } = useContext(AuthContext) as AuthContextType
    const [user, setUser] = useState<UserCollectionType | null>(null)





    useEffect(() => {
        setshowTabs(true)
        getUser()
    }, []);


    console.log(user, '<-- user')


    async function getUser() {
        const res: StoredUser = await getStoredUser()
        if (res !== null) setUser(res.record)
    }



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
                            <h1 className='text-light'>{user?.name}</h1>
                            <span className="text-light lead">{user?.role === "student" ? user.mat_no : user?.staff_id}</span> <br />
                        </div>
                    </div>
                </section>


                <section className='mt-4'>
                    <SpaceEvently>
                        <IonCard routerDirection='forward' routerLink='/assignments' className='ion-padding' color="success">
                            <IonCardContent class='text-center'>
                                <IonIcon icon={pencilOutline} size="large" />
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

                <IonCard routerDirection='forward' routerLink='/notes' className='mt-3 ion-padding' color={"success"}>
                    <IonCardContent class='text-center'>
                        <IonIcon icon={book} size="large" />
                        <p>Class Notes</p>
                    </IonCardContent>
                </IonCard>


                <section className='mt-4'>
                    <IonRouterLink routerDirection='forward' routerLink='/materials' >
                        <SpaceBetween className='ion-padding-horizontal'>
                            <strong>Materials</strong>
                            <IonIcon src={chevronForward} />
                        </SpaceBetween>
                    </IonRouterLink>

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