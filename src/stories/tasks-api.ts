import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: {
        'API-KEY': '2430a180-5884-45c0-b658-f6facd4c313b',
    }
})

export type TaskType = {
    addedDate: string
    deadline: string
    description: string
    id: string
    order: number
    priority: number
    startDate: string
    status: number
    title: string
    todoListId: string
}

export type GetTaskType = {
    error: null | string
    items: TaskType[]
    totalCount: number
}

export type ResponseType<D = {}> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}


export const tasksApi = {
    getTasks(todoID: string) {
        return instance.get<GetTaskType>(`/todo-lists/${todoID}/tasks`)
            .then(res => res.data)
    },
    createTasks(todoID: string, title: string) {
        return instance.post<ResponseType<{ items: TaskType[] }>>(`/todo-lists/${todoID}/tasks`, {title})
            .then(res => res.data)
    },
    deleteTasks(todoID: string, taskId: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todoID}/tasks/${taskId}`)
            .then(res => res.data)
    },
    updateTasks(todoID: string, taskId: string, title: string) {
        return instance.put<ResponseType<{ items: TaskType[] }>>(`/todo-lists/${todoID}/tasks/${taskId}`, {title})
            .then(res => res.data)
    },
}