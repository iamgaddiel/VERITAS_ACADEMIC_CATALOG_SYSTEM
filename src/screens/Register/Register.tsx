import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonImg, IonSegment, IonSegmentButton, IonList, IonItem, IonLabel, IonInput, IonButton, IonRouterLink, IonToast, IonIcon } from '@ionic/react'
import React, { useContext, useState } from 'react'
import LoginImage from '../../assets/svgs/undraw_my_app_re_gxtj.svg'

import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext, AuthContextType } from '../../contexts/AuthContext';
import { CreateUserType } from '../../@types/users';
import Loader from '../../components/Loader';
import ShowAlert from '../../components/ShowAlert';
import { useHistory } from 'react-router';
import { StorageContext, StorageContextType } from '../../contexts/StorageContext';
import { USER } from '../../helpers/keys';
import { pencil } from 'ionicons/icons';
import { getRandomString } from '../../helpers/utils';




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

const Register: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserType>();
    const { createUser } = useContext(AuthContext) as AuthContextType
    const history = useHistory()

    const [category, setCategory] = useState("student")
    const [showAleart, setShowAleart] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showToast, setSowToast] = useState(false)
    const [message, setMessage] = useState("")





    const onSubmit: SubmitHandler<CreateUserType> = async (data) => {
        setLoading(true)
        const mat_no = (category === 'staff') ? getRandomString(6) : data.mat_no
        const staff_id = (category === 'student') ? getRandomString(6) : data.staff_id

        const regData = {
            ...data,
            role: category,
            staff_id,
            mat_no
        }

        try {
            const res: any = await createUser(regData)

            if (res?.data.data.username) {
                displayFormError('username', res?.data?.data?.username?.message);
                return;
            }
            if (res?.data.data.name) {
                displayFormError('name', res.data.data.name.message);
                return;
            }
            if (res?.data.code === 400 && res?.data.data.email) {
                displayFormError('email', res.data.data.email.message);
                return;
            }
            if (res?.data.data.mat_no) {
                displayFormError('mat_no', res.data.data.mat_no.message);
                return;
            }
            if (res?.data.data.password) {
                displayFormError('password', res.data.data.password.message);
                return;
            }
            if (res?.data.data.passwordConfirm) {
                displayFormError('Confirm Password', res.data.data.passwordConfirm.message);
                return;
            }
            if (res?.data.data.staff_id) {
                displayFormError('staff_id', res.data.data.staff_id.message);
                return;
            }

        } catch (err) {
            console.log(err, '<------- }}')
        }

        setLoading(false)
        setShowAleart(true)
    }


    function closeAlert() {
        setShowAleart(false)
        history.push('/login')
    }


    function displayFormError(field: string, message: string) {
        setMessage(`${field}: ${message}`)
        setLoading(false)
        setSowToast(true)
        // return
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
                <IonToast
                    position='top'
                    color={"danger"}
                    message={message}
                    duration={3000}
                    isOpen={showToast}
                    onDidDismiss={() => setSowToast(false)}
                />
                <ShowAlert isOpen={showAleart} setIsOpen={closeAlert} message={'Registration successful'} />

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <IonList className='ion-no-border my-3' lines='none'>
                            <IonItem>
                                <IonLabel position='floating'>Name</IonLabel>
                                <IonInput
                                    type='text'
                                    placeholder='Peter Brown'
                                    {...register("name", {
                                        required: {
                                            message: "Name must not be empty",
                                            value: true
                                        }
                                    })}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position='floating'>Username</IonLabel>
                                <IonInput
                                    type='text'
                                    placeholder='person2'
                                    {...register("username",
                                        {
                                            required: {
                                                message: "Username must not be empty",
                                                value: true
                                            }
                                        }
                                    )}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position='floating'>Email</IonLabel>
                                <IonInput
                                    type='email'
                                    placeholder='example@example'
                                    {...register("email",
                                        {
                                            required: {
                                                message: "Email must not be empty",
                                                value: true
                                            }
                                        })}
                                />
                            </IonItem>
                            {
                                category === "student" ? (
                                    <IonItem>
                                        <IonLabel position='floating'>Mat Number</IonLabel>
                                        <IonInput type='text' placeholder='DSPT/HND/COM/2121/122332' {...register("mat_no", {
                                            required: {
                                                message: "Mat Number must not be empty",
                                                value: true
                                            }
                                        })} />
                                    </IonItem>
                                ) : null
                            }
                            {
                                category === "staff" ? (
                                    <IonItem>
                                        <IonLabel position='floating'>Staff ID</IonLabel>
                                        <IonInput type='text' placeholder='DSPT/HND/COM/2121/122332' {...register("staff_id", {
                                            required: {
                                                message: "Staff ID  must not be empty",
                                                value: true
                                            }
                                        })} />
                                    </IonItem>
                                ) : null
                            }

                            <IonItem>
                                <IonLabel position='floating'>Password</IonLabel>
                                <IonInput
                                    type='password'
                                    placeholder='123456789'
                                    {...register("password", {
                                        required: {
                                            message: "Password must not be empty",
                                            value: true
                                        },
                                        minLength: {
                                            message: "Password must be at least 8 characters",
                                            value: 8
                                        },
                                    })}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position='floating'>Confirm Password</IonLabel>
                                <IonInput
                                    type='password'
                                    placeholder='123456789'
                                    {...register("passwordConfirm", {
                                        required: {
                                            message: "Confirm Password must not be empty",
                                            value: true
                                        },
                                        minLength: {
                                            message: "Confirm Password must be at least 8 characters",
                                            value: 8
                                        },
                                    })}
                                />
                            </IonItem>
                        </IonList>

                        <ul>
                            {errors.name && <li className='text-danger'>{errors.name.message}</li>}
                            {errors.username && <li className='text-danger'>{errors.username.message}</li>}
                            {errors.email && <li className='text-danger'>{errors.email.message}</li>}
                            {errors.mat_no && <li className='text-danger'>{errors.mat_no.message}</li>}
                            {errors.staff_id && <li className='text-danger'>{errors.staff_id.message}</li>}
                            {errors.password && <li className='text-danger'>{errors.password.message}</li>}
                            {errors.passwordConfirm && <li className='text-danger'>{errors.passwordConfirm.message}</li>}
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
                                <IonButton
                                    className='fill'
                                    expand='block'
                                    size='large'
                                    fill='clear'
                                    shape='round'
                                    type='submit'
                                >
                                    <IonIcon icon={pencil} slot="end" />
                                    Register
                                </IonButton>
                            )
                        }
                    </form>

                    <div className='ion-text-center' >
                        <IonRouterLink routerDirection='forward' routerLink='/login' className='main_color'> Login </IonRouterLink>
                    </div>
                </section>



            </IonContent>
        </IonPage>
    )
}

export default Register