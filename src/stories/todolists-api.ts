import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: {
        'API-KEY': '2430a180-5884-45c0-b658-f6facd4c313b',
    }
})

export type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: D
}


export const todoListsApi = {
    getTodoLists() {
        return instance.get<TodoType[]>('/todo-lists')
            .then(res => res.data)
    },
    createTodoLists(title: string) {
        return instance.post<ResponseType<{ item: TodoType[] }>>('/todo-lists', {title})
            .then(res => res.data)
    },
    deleteTodoLists(id: string) {
        return instance.delete<ResponseType>(`/todo-lists/${id}`)
            .then(res => res.data)
    },
    updateTodoLists(id: string, title: string) {
        return instance.put<ResponseType>(`/todo-lists/${id}`, {title})
            .then(res => res.data)
    },
}