import { IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react'
import { add } from 'ionicons/icons'
import { useContext, useEffect, useState } from 'react'
import { Note, NoteList } from '../../@types/notes'
import { StoredUser, UserCollectionType } from '../../@types/users'
import BackHeader from '../../components/BackHeader'
import NotFound from '../../components/NotFound'
import SpaceBetween from '../../components/style/SpaceBetween'
import { AuthContext, AuthContextType } from '../../contexts/AuthContext'
import { SettingsContext, SettingsContextType } from '../../contexts/SettingsContext'
import { NOTES_COLLECTION } from '../../helpers/keys'
import { filterCollection, listCollection } from '../../helpers/sdks'

const Notes = () => {
    const [notes, setNotes] = useState<Note[]>([])
    const [user, setUser] = useState<UserCollectionType>()
    const { getStoredUser } = useContext(AuthContext) as AuthContextType
    const { setshowTabs } = useContext(SettingsContext) as SettingsContextType



    useEffect(() => {
        getUser()
        setshowTabs(true)
    }, []);



    async function getUser() {
        const res: StoredUser = await getStoredUser()
        if (res !== null) {
            setUser(res.record)
            getRoleDisplay(res.record.role!, res.record.id)
        }
    }


    async function getRoleDisplay(role: string, id: string) {
        let notes;
        switch (role) {
            case "staff":
                const filterParams = `lecturer="${id}"`
                notes = await filterCollection(
                    NOTES_COLLECTION,
                    filterParams,
                    1,
                    200,
                    'lecturer'
                ) as NoteList
                setNotes(notes.items)
                return;

            case "student":
                notes = await listCollection(NOTES_COLLECTION, 200, 'lecturer') as Note[]
                console.log("🚀 ~ file: Notes.tsx:55 ~ getRoleDisplay ~ notes", notes)
                setNotes(notes)
                return notes

        }


        // if (role === 'staff') {
        // }
        // else if (role === 'student') {
        // }

    }



    return (
        <IonPage>
            <BackHeader title='Notes' />

            <IonContent className='ion-paddding'>
                {
                    user?.role === "staff" ? (
                        <IonFab horizontal='center' vertical='bottom'>
                            <IonFabButton color={"success"} mode="ios" routerDirection='forward' routerLink='/add/note'>
                                <IonIcon icon={add} />
                            </IonFabButton>
                        </IonFab>
                    ) : null
                }

                <IonList>
                    {
                        notes.length > 0 ? (
                            <>
                                {
                                    notes.map((note, indx) => (
                                        <IonItem detail routerLink={`/note/${note.id}`} routerDirection='forward'>
                                            <IonLabel>
                                                <SpaceBetween>
                                                    <h2>{note.course_code}</h2>
                                                    <span>{note.created}</span>
                                                </SpaceBetween>
                                                {
                                                    user?.role! ===  "staff " ? (
                                                        <p>by {note.expand?.lecturer.name}</p>
                                                    ) : null
                                                }
                                            </IonLabel>
                                        </IonItem>

                                    ))

                                }
                            </>
                        ) : (
                            <NotFound message="No class notes" />
                        )
                    }
                </IonList>
            </IonContent>

        </IonPage>
    )
}

export default Notes