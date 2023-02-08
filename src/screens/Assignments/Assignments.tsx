import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList, IonPage, IonSegment, IonSegmentButton } from '@ionic/react'
import { add, addCircle, book } from 'ionicons/icons'
import React, { useContext, useEffect, useState } from 'react'
import { CreatedAssignmentList, CreatedAssignmentType, SubmitedAssignment, SubmitedAssignmentList } from '../../@types/assignments'
import { StoredUser, UserCollectionType } from '../../@types/users'
import BackHeader from '../../components/BackHeader'
import NotFound from '../../components/NotFound'
import SpaceBetween from '../../components/style/SpaceBetween'
import { AuthContext, AuthContextType } from '../../contexts/AuthContext'
import { StorageContext, StorageContextType } from '../../contexts/StorageContext'
import { CREATED_ASSIGNMENTS_COLLECTION, SUBMITED_ASSIGNMENTS_COLLECTION } from '../../helpers/keys'
import { filterCollection, listCollection } from '../../helpers/sdks'






const Assignments = () => {
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
                user?.role === 'staff' ? <StaffAssignments staff={user} /> : null
            }
            {
                user?.role === 'student' ? <StudentAssignments /> : null
            }
        </>
    )
}

export default Assignments





function StudentAssignments() {
    const [category, setCategory] = useState<'list' | 'submited'>('list')
    const [assignmentList, setAssignmentList] = useState<CreatedAssignmentType[]>([])



    useEffect(() => {
        listAssignments()
    }, [])


    async function listAssignments() {
        const res = await listCollection(CREATED_ASSIGNMENTS_COLLECTION) as CreatedAssignmentType[] | undefined;
        if (res !== undefined) setAssignmentList(res)
    }




    return (
        <IonPage>
            <BackHeader title='Assignments' />

            <IonContent className='ion-padding'>
                <IonFab horizontal='end' vertical='bottom'>
                    <IonFabButton routerDirection='forward' routerLink='/add/assignment' color={"success"}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>


                <section className="w-50 mx-auto">
                    <IonSegment slot='top' value={category} mode="ios">
                        <IonSegmentButton
                            className="text-capitalize"
                            title='list'
                            value='list'
                            onClick={() => setCategory("list")}
                        >
                            List
                        </IonSegmentButton>

                        <IonSegmentButton
                            className="text-capitalize"
                            title='submited'
                            value='submited'
                            onClick={() => setCategory("submited")}
                        >
                            Submited
                        </IonSegmentButton>
                    </IonSegment>
                </section>



                <section className='mt-3'>
                    <SpaceBetween className='ion-padding'>
                        <span>All</span>
                        <span className='text-success'>{assignmentList.length}</span>
                    </SpaceBetween>

                    {
                        category === 'list' ? (
                            <>
                                {
                                    assignmentList.length > 0 ? (
                                        assignmentList.map((assignemnt, indx) => (
                                            <IonList className='mt-3' key={indx}>
                                                <IonItem routerDirection='forward' routerLink={`/created/assignment/${assignemnt.id}`} detail>
                                                    <IonLabel>
                                                        <SpaceBetween>
                                                            <div>
                                                                <h3> <IonIcon icon={book} slot="start" /> { } {assignemnt.course_title}</h3>
                                                                <span className="lead">{assignemnt.course_code}</span>
                                                            </div>
                                                            <small>{assignemnt.created}</small>
                                                        </SpaceBetween>
                                                        <p className='mt-2'>{assignemnt.questions}</p>
                                                    </IonLabel>
                                                </IonItem>
                                            </IonList>
                                        ))
                                    ) : (
                                        <NotFound message={"You don't have any assignemnt"} />
                                    )
                                }
                            </>

                        ) : null

                    }
                    {
                        category === 'submited' ? (
                            // get all assignments belonging to this student, submited
                            <IonList className='mt-3'>
                                <IonItem routerDirection='forward' routerLink={'/assignment/₦{1}'} detail>
                                    <IonLabel>
                                        <SpaceBetween>
                                            <h3> <IonIcon icon={book} slot="start" /> { } Origin Of Flutter</h3>
                                            <small>12:00 pm</small>
                                        </SpaceBetween>
                                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, error praesentium tempore et autem commodi culpa inventore quibusdam illum! Consequatur.</p>
                                    </IonLabel>
                                </IonItem>
                            </IonList>
                        ) : null

                    }

                </section>
            </IonContent>
        </IonPage>
    )
}



const StaffAssignments: React.FC<{ staff: UserCollectionType }> = ({ staff }) => {
    const [category, setCategory] = useState<'list' | 'submited'>('list')
    const [createdAssignmentList, setCreatedAssignmentList] = useState<CreatedAssignmentList>()
    const [submitedAssignmentList, setSubmitedAssignmentList] = useState<SubmitedAssignmentList>()



    useEffect(() => {
        listAssignments()
        listSubmitedAssignments()
    }, [])



    async function listAssignments() {
        const filterParams = `staff="${staff.id}"`
        const res = await filterCollection(
            CREATED_ASSIGNMENTS_COLLECTION,
            filterParams,
            1,
            100,
        ) as CreatedAssignmentList | undefined;
        if (res !== undefined) setCreatedAssignmentList(res)
    }


    async function listSubmitedAssignments() {
        const filterParams = `staff="${staff.id}"`
        const res = await filterCollection(
            SUBMITED_ASSIGNMENTS_COLLECTION,
            filterParams,
            1,
            100,
        ) as SubmitedAssignmentList | undefined;
        if (res !== undefined) setSubmitedAssignmentList(res)
    }




    return (
        <IonPage>
            <BackHeader title='Assignments' />

            <IonContent className='ion-padding'>
                <IonFab horizontal='end' vertical='bottom'>
                    <IonFabButton routerDirection='forward' routerLink='/add/assignment' color={"success"}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>


                <section className="w-50 mx-auto">
                    <IonSegment slot='top' value={category} mode="ios">
                        <IonSegmentButton
                            className="text-capitalize"
                            title='list'
                            value='list'
                            onClick={() => setCategory("list")}
                        >
                            List
                        </IonSegmentButton>

                        <IonSegmentButton
                            className="text-capitalize"
                            title='submited'
                            value='submited'
                            onClick={() => setCategory("submited")}
                        >
                            Submited
                        </IonSegmentButton>
                    </IonSegment>
                </section>



                <section className='mt-3'>
                    {
                        category === 'list' ? (
                            <>
                                <SpaceBetween className='ion-padding'>
                                    <span>All</span>
                                    <span className='text-success'>{createdAssignmentList?.totalItems ? createdAssignmentList?.totalItems : 0}</span>
                                </SpaceBetween>
                                {
                                    createdAssignmentList?.totalItems! > 0 ? (
                                        createdAssignmentList?.items.map((assignemnt, indx) => (
                                            <IonList className='mt-3' key={indx}>
                                                <IonItem routerDirection='forward' routerLink={`/created/assignment/${assignemnt.id}`} detail>
                                                    <IonLabel>
                                                        <SpaceBetween>
                                                            <div>
                                                                <h3> <IonIcon icon={book} slot="start" /> { } {assignemnt.course_title}</h3>
                                                                <span className="lead">{assignemnt.course_code}</span>
                                                            </div>
                                                            <small>{assignemnt.created}</small>
                                                        </SpaceBetween>
                                                        <p className='mt-2'>{assignemnt.questions}</p>
                                                    </IonLabel>
                                                </IonItem>
                                            </IonList>
                                        ))
                                    ) : (
                                        <NotFound message={"You don't have any assignemnt"} />
                                    )
                                }
                            </>

                        ) : null

                    }
                    {
                        category === 'submited' ? (
                            <>
                                <SpaceBetween className='ion-padding'>
                                    <span>All</span>
                                    <span className='text-success'>{submitedAssignmentList?.totalItems ? submitedAssignmentList?.totalItems : 0}</span>
                                </SpaceBetween>
                                {
                                    submitedAssignmentList?.totalItems! > 0 ? (
                                        submitedAssignmentList?.items.map((assignemnt, indx) => (
                                            <IonList className='mt-3' key={indx}>
                                                <IonItem routerDirection='forward' routerLink={`/created/assignment/${assignemnt.id}`} detail>
                                                    <IonLabel>
                                                        <SpaceBetween>
                                                            <div>
                                                                <h3> <IonIcon icon={book} slot="start" /> { } {assignemnt.course_title}</h3>
                                                                <span className="lead">{assignemnt.course_code}</span>
                                                            </div>
                                                            <small>{assignemnt.created}</small>
                                                        </SpaceBetween>
                                                        <p className='mt-2'>{assignemnt.questions}</p>
                                                    </IonLabel>
                                                </IonItem>
                                            </IonList>
                                        ))
                                    ) : (
                                        <NotFound message={"No submited ssignemnt"} />
                                    )
                                }
                            </>
                        ) : null

                    }

                </section>
            </IonContent>
        </IonPage>
    )
}

