export type CreateUserType = {
    email: string
    password: string
    passwordConfirm: string
    name: string,
    mat_no?: string,
    staff_id?: string
    avatar?: string
}

export type UsereCollectionType = {
    id: string
    collectionId: string
    collectionName:string
    created; string
    updated: string
    username?: string
    verified: boolean
    emailVisibility: boolean,
    email: string
    name: string
    avatar: string
    mat_no: string
}