import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRouterLink, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react'
import { pencil } from 'ionicons/icons'
import React, { useState } from 'react'

import LoginImage from '../../assets/svgs/undraw_my_app_re_gxtj.svg'
import './Login.css'








// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   example: string,
//   exampleRequired: string,
// };

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

//   console.log(watch("example")) // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }

function Login() {
    const [category, setCategory] = useState("student")

    return (
        <IonPage>

            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent class='ion-padding'>
                <section className='mx-auto w-100'>
                    <IonImg src={LoginImage} alt={""} />
                </section>


                {/* segmnet */}
                <section className="w-50 mx-auto mt-5">
                    <IonSegment slot='top' value={category}>
                        <IonSegmentButton
                            className="text-capitalize"
                            title='student'
                            value='student'
                            onClick={() => setCategory("student")}
                        >
                            Student
                        </IonSegmentButton>

                        <IonSegmentButton
                            className="text-capitalize"
                            title='staff'
                            value='staff'
                            onClick={() => setCategory("staff")}
                        >
                            Staff
                        </IonSegmentButton>
                    </IonSegment>

                </section>

                {/* form */}
                <section>
                    {
                        category === "student" ? (
                            <form action="">
                                <IonList className='ion-no-border my-3' lines='none'>
                                    <IonItem className='d-flex align-item-center'>
                                        <IonLabel position='floating'>Matriculation Number</IonLabel>
                                        <IonInput type='email' placeholder='DSPT/HND/COM/2121/122332' />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Password</IonLabel>
                                        <IonInput type='password' placeholder='123456789' />
                                    </IonItem>
                                </IonList>

                                <IonButton className='fill' expand='block' size='large' fill='clear' shape='round'>Login</IonButton>
                            </form>

                        ) : null
                    }

                    {
                        category === "staff" ? (
                            <form action="">
                                <IonList className='ion-no-border my-3'>
                                    <IonItem>
                                        <IonLabel position='floating'>Staff ID</IonLabel>
                                        <IonInput type='email' placeholder='DSPT/HND/COM/2121/122332' />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Password</IonLabel>
                                        <IonInput type='password' placeholder='123456789' />
                                    </IonItem>
                                </IonList>

                                <IonButton className='fill' expand='block' size='large' fill='clear' shape='round' >Login</IonButton>
                            </form>

                        ) : null
                    }

                    <div className='ion-text-center' >
                        <IonRouterLink routerDirection='forward' routerLink='/register' className='main_color'> Register </IonRouterLink>
                    </div>
                </section>



            </IonContent>
        </IonPage>
    )
}

export default Login