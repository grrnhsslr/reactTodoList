export type UserType = {
    id: number,
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    dateCreated:string,
    dueDate: string,
    completionStatus: boolean
}

export type TaskType = {
    id: number,
    title: string,
    body: string,
    dateCreated: string,
    author: UserType,
    dueDate: string,
    completionStatus: boolean
}

export type TaskFormDataType = {
    title: string,
    body: string,
    dueDate: string
}
