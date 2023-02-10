import { IonPage, IonContent } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { useParams } from 'react-router'
import { Note } from '../../@types/notes'
import { StoredUser, UserCollectionType } from '../../@types/users'
import BackHeader from '../../components/BackHeader'
import { AuthContextType, AuthContext } from '../../contexts/AuthContext'
import { NOTES_COLLECTION } from '../../helpers/keys'
import { getItem } from '../../helpers/sdks'




const SingleNote = () => {
    const { id }: RouterParamType = useParams()

    const [note, setNote] = useState<Note>()
    const [user, setUser] = useState<UserCollectionType>()
    const [noteContent, setNoteContent] = useState("")


    const { getStoredUser } = useContext(AuthContext) as AuthContextType



    useEffect(() => {
        getUser()
        getNote()
    }, []);



    async function getUser() {
        const res: StoredUser = await getStoredUser()
        if (res !== null) {
            setUser(res.record)
        }
    }



    async function getNote() {
        const res = await getItem(NOTES_COLLECTION, id, 'lecturer') as Note
        setNote(res)
        setNoteContent(res.note)
    }

    return (
        <IonPage>
            {/* TODO: update with note title */}
            <BackHeader title={note?.course_code!} />

            <IonContent fullscreen className='ion-padding text-muted'>
                <p className='lead muted-text'>{note?.course_code} | by {user?.role === "staff" && note?.expand?.lecturer.name}</p>


                <ReactQuill theme="snow" value={noteContent} className='mt-3' style={{ height: '100%' }} />
            </IonContent>

        </IonPage>
    )
}

type RouterParamType = {
    id: string
}

export default SingleNote