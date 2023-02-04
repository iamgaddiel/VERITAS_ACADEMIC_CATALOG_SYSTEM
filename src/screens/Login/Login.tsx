import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRouterLink, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import { logIn } from 'ionicons/icons'
import { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

import LoginImage from '../../assets/svgs/undraw_my_app_re_gxtj.svg'
import { AuthContext, AuthContextType } from '../../contexts/AuthContext'
import { StorageContext, StorageContextType } from '../../contexts/StorageContext'
import { USER } from '../../utils/keys'
import Settings from '../../utils/settings'
import './Login.css'








// import { useForm, SubmitHandler } from "react-hook-form";

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const { saveData } = useContext(StorageContext) as StorageContextType
    const { authenticate, logout } = useContext(AuthContext) as AuthContextType
    const history = useHistory()
    const { pb } = Settings()

    const [message, setMessage] = useState('')
    const [openToast, setOpenToast] = useState(false)
    const [loading, setLoading] = useState(false)

    // logout()

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        setLoading(true)
        try {
            const res: any = await authenticate(email, password)
            console.log("🚀 ~ file: Login.tsx:35 ~ constonSubmit:SubmitHandler<Inputs>= ~ res", res)


            if (pb.authStore.isValid) {
                console.log(pb.authStore.token, '<---- new user')
                saveData(USER, res)
                setLoading(false)
                history.push('/dashboard')
                return
            }

            displayFormError(res.data.message)

        } catch (err) {
            console.log(err, '<-- New Error')
        }
    }

    function displayFormError(message: string) {
        if (message) {
            setMessage(message)
            setLoading(false)
            setOpenToast(true)
        }
    }

    return (
        <IonPage>

            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent class='ion-padding'>
                <IonToast
                    position='top'
                    color={'danger'}
                    duration={3000}
                    message={message}
                    isOpen={openToast}
                    onDidDismiss={() => setOpenToast(false)}
                />

                <section className='mx-auto w-100'>
                    <IonImg src={LoginImage} alt={""} />
                </section>


                {/* form */}
                <section className='mt-5'>
                    <h2 className=''>Login</h2>


                    <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
                        <IonList className='ion-no-border my-3' lines='none'>
                            <IonItem className='d-flex align-item-center'>
                                <IonLabel position='floating'>Email</IonLabel>
                                <IonInput type='email' placeholder='example@email.com' {...register('email', {
                                    required: {
                                        message: 'email required',
                                        value: true
                                    }
                                })} />
                            </IonItem>
                            <IonItem>
                                <IonLabel position='floating'>Password</IonLabel>
                                <IonInput type='password' placeholder='123456789' {...register('password', {
                                    required: {
                                        message: 'password required',
                                        value: true
                                    }
                                })} />
                            </IonItem>
                        </IonList>

                        <ul>
                            {errors.email && <li className='text-danger'>{errors.email.message}</li>}
                            {errors.password && <li className='text-danger'>{errors.password.message}</li>}
                        </ul>


                        {
                            loading ? (
                                <IonButton
                                    className='fill'
                                    expand='block'
                                    size='large'
                                    fill='clear'
                                    shape='round'
                                >
                                    <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status">
                                        </div>
                                    </div>
                                </IonButton>

                            ) : (
                                <IonButton className='fill' expand='block' size='large' fill='clear' shape='round' type='submit'>
                                    Login
                                    <IonIcon icon={logIn} slot='end' />
                                </IonButton>
                            )
                        }
                    </form>



                    <div className='ion-text-center' >
                        <IonRouterLink routerDirection='forward' routerLink='/register' className='main_color'> Register </IonRouterLink>
                    </div>
                </section>



            </IonContent>
        </IonPage>
    )
}

type Inputs = {
    email: string
    password: string
};


export default Login
