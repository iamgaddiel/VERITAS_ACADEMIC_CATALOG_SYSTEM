import { UserCollectionType } from "./users"

export type NoteInputs = {
    note?: string
    course_code: string
    lecturer: string
}


export type Note = {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string
    note: string
    course_code: string
    lecturer: string
    expand?: {
        lecturer: UserCollectionType
    }

}


export interface NoteList {
    page: number
    perPage: number,
    totalPages: number,
    totalItems: number,
    items: Note[]
}

