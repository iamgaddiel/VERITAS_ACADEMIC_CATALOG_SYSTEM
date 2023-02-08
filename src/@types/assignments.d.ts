
// ----------------------- [ Student ] ----------------
export type SubmitedAssignment = {
    student: string
    note: string,
    course_title: string,
    course_code: string,
    assignment_id: string,
    submited: boolean,
    id?: string,
    collectionId?: string,
    collectionName?: string,
    created?: string,
    updated?: string,
    lecturer_id: string
}

export interface SubmitedAssignmentList {
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
    items: SubmitedAssignmentType[]
}


// ----------------------- [ Staff ] ----------------

export type CreatedAssignmentType = {
    questions: string,
    staff: string
    comment: string,
    course_title: string,
    course_code: string,
    id?: string,
    collectionId?: string,
    collectionName?: string,
    created?: string,
    updated?: string,
}


interface CreatedAssignmentList {
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
    items: CreatedAssignmentType[]
}




/**
 * --------------------------------------------------------
 * Form Input Types
 * --------------------------------------------------------
 */

export type StudentAssignmentInputs = {
    user: string,
    note: string,
    course_title: string,
    course_code: string,
    file?: string
};



export type StafffAssignmentInputs = {
    questions: string,
    staff: string
    comment: string,
    course_title: string,
    course_code: string,
};
