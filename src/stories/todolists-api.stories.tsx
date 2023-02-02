import React, {KeyboardEvent, useEffect, useState} from 'react'
import {todoListsApi} from "./todolists-api";

export default {
    title: 'API-TODOLIST'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todoListsApi.getTodoLists()
            .then(res => setState(res))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [input, setInput] = useState<string>('')
    useEffect(() => {
        // let title = `Hello, Samurais! Let's go programming!`
        // todoListsApi.createTodoLists(title)
        //     .then(res => setState(res))
    }, [])

    const createNewTitleHandler = () => {
        todoListsApi.createTodoLists(input)
            .then(res => setState(res))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code.trim() === "Enter") {
            createNewTitleHandler()
            setInput('')
        }
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input value={input}
                   onKeyPress={onKeyPressHandler}
                   onChange={(e) => setInput(e.currentTarget.value)}
                   placeholder={'create new title'}/>
        </div>
        <button onClick={createNewTitleHandler}>let's go create new todoList!</button>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        // const id = 'ab2764fe-9921-4125-8521-33d5affac6b3'
        // todoListsApi.deleteTodoLists(id)
        //     .then(res => setState(res))
    }, [])

    const deleteTodoHandler = () => {
        todoListsApi.deleteTodoLists(input)
            .then(res => setState(res))
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code.trim() === 'Enter') {
            deleteTodoHandler()
            setInput('')
        }
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input value={input}
                   onKeyPress={onKeyHandler}
                   onChange={(e) => setInput(e.currentTarget.value)}
                   placeholder={'paste id of Todolist'}/>
        </div>
        <button onClick={deleteTodoHandler}>delete</button>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todoId, setTodoId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    useEffect(() => {
        // const id = '3dfe70aa-d34f-4ed7-b9bf-e6e6e56d73d8'
        // const title = 'KAVABANGA! HELLO!'
        // todoListsApi.updateTodoLists(id, title)
        //     .then(res => setState(res))
    }, [])

    const updateTitleAndIdTodo = () => {
        if (todoId !== '' && title !== '') {
            todoListsApi.updateTodoLists(todoId, title)
                .then(res => setState(res))
        } else setError('todo length should be 36')
        setTitle('')
        setTodoId('')
    }

    const onKeyTodoAndTitle = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && todoId.trim() !== '' && title.trim() !== '') {
            updateTitleAndIdTodo()
            setError('')
        } else if (e.code === 'Enter' && todoId.length !== 36) {
            setError('todo length should be 36')
        } else if (e.code !== 'Enter') {
            setError('')
        }
    }

    return <div>

        {JSON.stringify(state)}
        <div>
            <input value={todoId}
                   onKeyDown={onKeyTodoAndTitle}
                   onChange={(e) => setTodoId(e.currentTarget.value)}
                   placeholder={'paste id of TodoList'}/>
            <input value={title}
                   onKeyPress={onKeyTodoAndTitle}
                   onChange={(e) => setTitle(e.currentTarget.value)}
                   placeholder={'create new title for TodoList'}/>
        </div>
        <div>
            {error ? error : ''}
        </div>
        <div>
            <button onClick={updateTitleAndIdTodo}>update</button>
        </div>
    </div>
}

