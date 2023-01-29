import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonImg, IonSegment, IonSegmentButton, IonList, IonItem, IonLabel, IonInput, IonButton, IonRouterLink } from '@ionic/react'
import React, { useState } from 'react'
import LoginImage from '../../assets/svgs/undraw_my_app_re_gxtj.svg'

import { useForm, SubmitHandler } from "react-hook-form";




type RegistrationType = {
    name: string
    email: string
    mat_no?: string
    staff_id?: string
    password: string
    confirmPassword: string
};
// export default function App() {


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


function Register() {
    const [category, setCategory] = useState("student")




    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegistrationType>();



    const onSubmit: SubmitHandler<RegistrationType> = data => {

    }


    return (
        <IonPage>

            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>

                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent class='ion-padding'>
                <section className='mx-auto w-75'>
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <IonList className='ion-no-border my-3' lines='none'>
                                    <IonItem>
                                        <IonLabel position='floating'>Name</IonLabel>
                                        <IonInput type='text' placeholder='Peter Brown' {...register("name")} />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Email</IonLabel>
                                        <IonInput type='email' placeholder='example@example' {...register("email")}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Mat Number</IonLabel>
                                        <IonInput type='text' placeholder='DSPT/HND/COM/2121/122332' {...register("mat_no")}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Password</IonLabel>
                                        <IonInput type='password' placeholder='123456789' {...register("password")}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Confirm Password</IonLabel>
                                        <IonInput type='password' placeholder='123456789' {...register("confirmPassword")}/>
                                    </IonItem>
                                </IonList>

                                <IonButton className='fill' expand='block' size='large' fill='clear' shape='round'>Register</IonButton>
                            </form>

                        ) : null
                    }

                    {
                        category === "staff" ? (
                            <form action="">
                                <IonList className='ion-no-border my-3' lines='none'>
                                    <IonItem>
                                        <IonLabel position='floating'>Name</IonLabel>
                                        <IonInput type='text' placeholder='Peter Brown' />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Email</IonLabel>
                                        <IonInput type='email' placeholder='example@example' />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Staff Id</IonLabel>
                                        <IonInput type='text' placeholder='DSPT/HND/COM/2121/122332' />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Password</IonLabel>
                                        <IonInput type='password' placeholder='123456789' />
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position='floating'>Confirm Password</IonLabel>
                                        <IonInput type='password' placeholder='123456789' />
                                    </IonItem>
                                </IonList>

                                <IonButton className='fill' expand='block' size='large' fill='clear' shape='round'>Register</IonButton>
                            </form>

                        ) : null
                    }

                    <div className='ion-text-center' >
                        <IonRouterLink routerDirection='forward' routerLink='/login' className='main_color'> Login </IonRouterLink>
                    </div>
                </section>



            </IonContent>
        </IonPage>
    )
}

export default Register