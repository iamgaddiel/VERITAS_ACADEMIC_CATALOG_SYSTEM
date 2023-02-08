import { IonButton, IonContent, IonImg, IonPage } from '@ionic/react'
import React, { useContext } from 'react'

import ReadingImg from '../../assets/svgs/undraw_reading_re_29f8.svg'
import { AuthContext, AuthContextType } from '../../contexts/AuthContext'


function Landing() {
    const { } = useContext(AuthContext) as AuthContextType


    return (
        <IonPage>
            <IonContent className='ion-padding'>
                <section className="d-flex align-items-center  h-100">

                    <div>
                        {/* Landing image */}
                        <section className="landing_image_wrapper">
                            <h5 className="fw-bold text-center">Academic Catalog System</h5>
                            <div className="landing_image w-75  mx-auto my-5">
                                <IonImg src={ReadingImg} alt={"undraw_reading_re_29f8"} />

                            </div>
                            <div className='ion-text-center mb-4'>
                                <h1 className="fw-bold">Welcome!</h1>
                                <div className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, dolorem?</div>
                            </div>
                        </section>

                        <section className="ion-text-center">
                            <IonButton
                                className='fill'
                                expand='block'
                                size='large'
                                fill='clear'
                                routerLink='/register'
                                routerDirection='forward'
                                shape='round'
                            >
                                Register
                            </IonButton>

                            <IonButton
                                className='mt-3 fill-outline '
                                expand='block'
                                size='large'
                                fill='outline'
                                routerDirection='forward'
                                routerLink='/login'
                                shape='round'
                            >
                                Login
                            </IonButton>

                        </section>
                    </div>

                </section>

            </IonContent>
        </IonPage>
    )
}

export default Landing
