import React, {KeyboardEvent, useEffect, useState} from 'react'
import {tasksApi} from "./tasks-api";

export default {
    title: 'API-TASKS'
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todoID, setTodoID] = useState<string>('')

    useEffect(() => {
        // const todoID = '9af244d9-2780-4275-89e1-51dfa60d2946'
        // tasksApi.getTasks(todoID)
        //     .then(res => setState(res))
    }, [])

    const getActualTask = () => {
        if (todoID.trim() !== '') {
            tasksApi.getTasks(todoID)
                .then(res => setState(res))
        }
        setTodoID('')
    }

    const getTaskOnKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            getActualTask()
        }
    }

    return <div>
        <div><input value={todoID}
                    onKeyDown={getTaskOnKey}
                    onChange={(e) => setTodoID(e.currentTarget.value)}
                    placeholder={'Paste ID of Todo'}/>
        </div>
        <div>
            <button onClick={getActualTask}>GET task</button>
        </div>

        <div>{JSON.stringify(state)}</div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const [todoID, setTodoID] = useState<string>('')

    useEffect(() => {
        // const todoID = '9af244d9-2780-4275-89e1-51dfa60d2946'
        // let title = `Hello, TASK number 2!`
        // tasksApi.createTasks(todoID, title)
        //     .then(res => setState(res))
    }, [])

    const createNewTaskHandler = () => {
        if (todoID.trim() !== '' && title.trim() !== '') {
            tasksApi.createTasks(todoID, title)
                .then(res => setState(res))
        }
    }
    const onKeyCreateNewTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            createNewTaskHandler()
        }
    }


    return <div>
        <div>
            <input
                value={title}
                onKeyPress={onKeyCreateNewTask}
                onChange={(e) => setTitle(e.currentTarget.value)}
                placeholder={'Create new title'}/>
            <input
                value={todoID}
                onKeyPress={onKeyCreateNewTask}
                onChange={(e) => setTodoID(e.currentTarget.value)}
                placeholder={'Paste needed Todo ID'}/>
        </div>
        <div>
            <button onClick={createNewTaskHandler}>Create!</button>
        </div>
        <div>{JSON.stringify(state)}</div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskID, setTaskID] = useState<string>('')
    const [todoID, setTodoID] = useState<string>('')

    useEffect(() => {
        // const todoID = '3719bd9b-fa7e-4e33-adf0-00a780ef6a2f'
        // const taskId = '24b5fafc-a3dc-4dfe-9b4f-f7df2cb82dfb'
        //
        // tasksApi.deleteTasks(todoID, taskId)
        //     .then(res => setState(res))
    }, [])

    const deleteTaskHandler = () => {
        if (taskID !== '' && todoID !== '') {
            tasksApi.deleteTasks(todoID, taskID)
                .then(res => setState(res))
        }
    }

    const onKeyDeleteTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') deleteTaskHandler()
    }

    return <div>
        <div>
            <input
                value={taskID}
                onChange={(e) => setTaskID(e.currentTarget.value)}
                onKeyDown={onKeyDeleteTaskHandler}
                placeholder={'Paste needed TASK ID'}/>
            <input
                value={todoID}
                onChange={(e) => setTodoID(e.currentTarget.value)}
                onKeyDown={onKeyDeleteTaskHandler}
                placeholder={'Paste needed TODO ID'}/>
        </div>
        <div>
            <button onClick={deleteTaskHandler}>Delete</button>
        </div>
        <div>{JSON.stringify(state)}</div>
    </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todoId, setTodoId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')

    useEffect(() => {
        // const todoID = '3719bd9b-fa7e-4e33-adf0-00a780ef6a2f'
        // const taskId = '24b5fafc-a3dc-4dfe-9b4f-f7df2cb82dfb'
        // const title = 'KAVABANGA! HELLO!'
        //
        // tasksApi.updateTasks(todoID, taskId, title)
        //     .then(res => setState(res))
    }, [])

    const updateTaskHandler = () => {
        if (taskID !== '' && title !== '' && taskID !== '') {
            tasksApi.updateTasks(todoId, taskID, title)
                .then(res => setState(res))
        }
        setTodoId('')
        setTaskID('')
        setTitle('')
    }

    const onKeyUpdateTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') updateTaskHandler()
    }

    return <div>
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                onKeyDown={onKeyUpdateTaskHandler}
                placeholder={'Create new title'}/>
            <input
                value={taskID}
                onChange={(e) => setTaskID(e.currentTarget.value)}
                onKeyDown={onKeyUpdateTaskHandler}
                placeholder={'Paste needed task id'}/>
            <input
                value={todoId}
                onChange={(e) => setTodoId(e.currentTarget.value)}
                onKeyDown={onKeyUpdateTaskHandler}
                placeholder={'Paste needed todo id'}/>
        </div>
        <div>
            <button onClick={updateTaskHandler}>Update</button>
        </div>
        <div>{JSON.stringify(state)}</div>
    </div>
}

