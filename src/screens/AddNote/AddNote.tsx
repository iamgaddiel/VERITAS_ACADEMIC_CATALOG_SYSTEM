import { IonButton, IonContent, IonFooter, IonInput, IonItem, IonLabel, IonList, IonPage, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import ReactQuill from 'react-quill'
import { useHistory } from 'react-router';
import { NoteInputs } from '../../@types/notes';
import { StoredUser, UserCollectionType } from '../../@types/users';
import BackHeader from '../../components/BackHeader'
import { AuthContextType, AuthContext } from '../../contexts/AuthContext';
import { NOTES_COLLECTION } from '../../helpers/keys';
import { createItem } from '../../helpers/sdks';
import useAuth from '../../hooks/useAuth';

const AddNote = () => {
    const [note, setNote] = useState('')

    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm<NoteInputs>();
    const { getStoredUser } = useContext(AuthContext) as AuthContextType
    const [user, setUser] = useState<UserCollectionType | null>(null)





    useEffect(() => {
        getUser()
    }, []);



    async function getUser() {
        const res: StoredUser = await getStoredUser()
        if (res !== null) setUser(res.record)
    }


    const onSubmit: SubmitHandler<NoteInputs> = async (data) => {
        const formData = { note, ...data, lecturer: user?.id }
        console.log(formData)
        const { isCreated } = await createItem(NOTES_COLLECTION, formData)
        if (isCreated) {
            history.push('/notes')
        }
    }


    return (
        <IonPage>
            <BackHeader title='Add Note' />
            <IonContent className='ion-padding'>


                <form onSubmit={handleSubmit(onSubmit)}>


                    <IonList className=''>
                        <IonItem>
                            <IonLabel position='floating'>Couse Code</IonLabel>
                            <IonInput type='text' {...register('course_code', {
                                required: {
                                    value: true,
                                    message: 'This field is required'
                                }
                            })} />
                            {errors.course_code && <span className='text-danger'>{errors.course_code.message}</span>}

                        </IonItem>
                    </IonList>

                    <ReactQuill
                        theme="snow"
                        value={note}
                        onChange={setNote}
                        className='mt-3'
                        style={{ height: "53.20vh" }}
                    />
                    {/* {errors.note && <span>This field is required</span>} */}

                    <div className="mt-4">
                        <IonButton
                            color={"success"}
                            expand={"block"}
                            shape="round"
                            type='submit'
                            className='mt-5'
                        >Add</IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default AddNote