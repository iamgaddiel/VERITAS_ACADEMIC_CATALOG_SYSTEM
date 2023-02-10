import { IonButton, IonCard, IonCardContent, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import { useContext, useEffect, useState } from 'react'
import BackHeader from '../../components/BackHeader'
import ReactQuill from 'react-quill';
import { useForm, SubmitHandler } from "react-hook-form";
import { UserCollectionType, StoredUser } from '../../@types/users';
import { AuthContextType, AuthContext } from '../../contexts/AuthContext';
import { StafffAssignmentInputs } from '../../@types/assignments';
import { createItem } from '../../helpers/sdks';
import { CREATED_ASSIGNMENTS_COLLECTION } from '../../helpers/keys';
import ShowAlert from '../../components/ShowAlert';
import { useHistory } from 'react-router';







// function StudentAssignment

function AddAssignnment() {
    const { getStoredUser } = useContext(AuthContext) as AuthContextType
    const [user, setUser] = useState<UserCollectionType | null>(null)



    useEffect(() => {
        getUser()
    }, []);



    async function getUser() {
        const res: StoredUser = await getStoredUser()
        if (res !== null) setUser(res.record)
    }


    return (
        <>
            {
                user?.role === 'staff' ? <CreateAssignmentByStaff staff={user} /> : null
            }
            {
                user?.role === 'student' ? <SolveAssignmentByStudent user={user!} /> : null
            }
        </>
    )
}

export default AddAssignnment



/**
 * ----------------------------------------------------------------
 * --------------------------- [ Student ] ------------------------
 * ----------------------------------------------------------------
 */


type StudentInputsTypes = {
    user: string,
    note: string,
    course_title: string,
    course_code: string,
    file?: string
};


function SolveAssignmentByStudent({ user }: { user: UserCollectionType }) {
    const [note, setNote] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm<StudentInputsTypes>();


    const handleAssignmentSuubmision: SubmitHandler<StudentInputsTypes> = (data) => {
        const submitedData = { ...data, note }
    };




    return (
        <IonPage>
            <BackHeader title='Add Assignment' />
            <IonContent className=''>
                <form onSubmit={handleSubmit(handleAssignmentSuubmision)}>
                    <IonCard mode='ios' style={{ height: '100vh' }}>
                        <IonCardContent>
                            <ul>
                                {errors.course_code && <li className='text-danger'>{errors.course_code.message}</li>}
                                {errors.course_title && <li className='text-danger'>{errors.course_title.message}</li>}
                                {errors.file && <li className='text-danger'>{errors.file.message}</li>}
                            </ul>
                            <IonList>
                                <IonItem>
                                    <IonLabel position='floating'>Course Title</IonLabel>
                                    <IonInput
                                        type='text'
                                        placeholder='Introduction to computing'
                                        mode='ios'
                                        {...register("course_title", {
                                            required: {
                                                value: true,
                                                message: 'course title required'
                                            }
                                        })}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position='floating' mode='ios'>Course Code</IonLabel>
                                    <IonInput
                                        type='text'
                                        placeholder='COM101'
                                        mode='ios'
                                        {...register("course_code", {
                                            required: {
                                                value: true,
                                                message: 'course code required'
                                            }
                                        })}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position='stacked'>Note</IonLabel>
                                    <input
                                        type="file"
                                        {...register("file")}
                                    />
                                </IonItem>
                            </IonList>
                            <div className="form-group mt-3">
                                <ReactQuill theme="snow" value={note} onChange={setNote} />
                            </div>
                            <IonButton
                                className='fill mt-5'
                                shape='round'
                                expand='block'
                                mode='ios'
                                color={"success"}
                                type={"submit"}
                            >
                                Submit
                            </IonButton>
                        </IonCardContent>
                    </IonCard>
                </form>
            </IonContent>
        </IonPage>
    )
}






/**
 * ----------------------------------------------------------------
 * --------------------------- [ Staff ] ------------------------
 * ----------------------------------------------------------------
 */


const CreateAssignmentByStaff: React.FC<{ staff: UserCollectionType }> = ({ staff }) => {
    const [questions, setQuestions] = useState('');
    const [alertMsg, setAlertMsg] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<StafffAssignmentInputs>();
    const history = useHistory()



    const handleAssignmentSuubmision: SubmitHandler<StafffAssignmentInputs> = async (data) => {
        setLoading(true)
        const submitedData = { ...data, questions, staff: staff.id }

        const { isCreated } = await createItem(CREATED_ASSIGNMENTS_COLLECTION, submitedData)

        if (isCreated) {
            setLoading(false)
            setAlertMsg('Assignment Created Successfuly')
            setShowAlert(true)
        }
        setLoading(false)
    };


    function onFinish() {
        history.push('/assignments')
    }


    return (
        <IonPage>
            <BackHeader title='Add Assignment' />
            <IonContent className=''>
                <ShowAlert
                    isOpen={showAlert}
                    message={alertMsg}
                    setIsOpen={setShowAlert}
                    fallback={() =>  history.push('/assignments')}
                />

                <form onSubmit={handleSubmit(handleAssignmentSuubmision)}>
                    <IonCard mode='ios' style={{ height: '100vh' }}>
                        <IonCardContent>
                            <ul>
                                {errors.course_code && <li className='text-danger'>{errors.course_code.message}</li>}
                                {errors.course_title && <li className='text-danger'>{errors.course_title.message}</li>}
                                {errors.comment && <li className='text-danger'>{errors.comment.message}</li>}
                            </ul>
                            <IonList>
                                <IonItem>
                                    <IonLabel position='floating'>Course Title</IonLabel>
                                    <IonInput
                                        type='text'
                                        placeholder='Introduction to computing'
                                        mode='ios'
                                        {...register("course_title", {
                                            required: {
                                                value: true,
                                                message: 'course title required'
                                            }
                                        })}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position='floating' mode='ios'>Course Code</IonLabel>
                                    <IonInput
                                        type='text'
                                        placeholder='COM101'
                                        mode='ios'
                                        {...register("course_code", {
                                            required: {
                                                value: true,
                                                message: 'course code required'
                                            }
                                        })}
                                    />
                                </IonItem>
                                <IonItem>
                                    <IonLabel position='floating' mode='ios'>Comment</IonLabel>
                                    <IonInput
                                        type='text'
                                        placeholder='This assingment is important'
                                        mode='ios'
                                        {...register("comment")}
                                    />
                                </IonItem>
                            </IonList>
                            <div className="form-group mt-5">
                                <IonLabel>Questions</IonLabel>
                                <ReactQuill theme="snow" value={questions} onChange={setQuestions} className='mt-3' />
                            </div>



                            {
                                loading ? (
                                    <IonButton
                                        className='fill mt-5'
                                        shape='round'
                                        expand='block'
                                        mode='ios'
                                        color={"success"}
                                    >
                                        <div className="d-flex justify-content-center">
                                            <div className="spinner-border" role="status">
                                            </div>
                                        </div>
                                    </IonButton>
                                ) : (
                                    <IonButton
                                        className='fill mt-5'
                                        shape='round'
                                        expand='block'
                                        mode='ios'
                                        color={"success"}
                                        type={"submit"}
                                    >
                                        Submit
                                    </IonButton>

                                )
                            }
                        </IonCardContent>
                    </IonCard>
                </form>
            </IonContent>
        </IonPage>
    )
}