import React from "react";
import styles from "./ToDoList.module.css";
import Form from "../Form/Form";
import Todo from "../List/Todo";
import {ToDoListAPI} from "../../services/ToDoListService";

import narrowingError from "../../helpers/NorrowingError";
interface HandleUpdateTextParams {id: string; text: string}


const ToDoList = () => {
    const {data: lists} = ToDoListAPI.useFetchAllListQuery(undefined)
    const [deleteToDo, {}] = ToDoListAPI.useDeleteToDoMutation()
    const [updateTextToDo, {error: updateTextToDoError}] = ToDoListAPI.useUpdateTextToDoMutation()
    const [updateIsDoneToDo, {error: updateIsDoneToDoError}] = ToDoListAPI.useUpdateIsDoneToDoMutation()




    const handleRemove = (id: string) => {
        deleteToDo(id)
    }
    const handleUpdateText = ({id, text}: HandleUpdateTextParams) => {
        updateTextToDo({id, text})
    }



    return <div className={styles.toDoList}>
        <h1 className={styles.title}>todolist</h1>
        {updateTextToDoError && narrowingError(updateTextToDoError)}
        {updateIsDoneToDoError && narrowingError(updateIsDoneToDoError)}
        <Form />
        {lists?.map(({id, isDone, text}, remove) => {
            return (<Todo key={id} id={id} isDone={isDone} text={text} remove={handleRemove} updateText={handleUpdateText} updateIsDoneToDo={updateIsDoneToDo}/>)
        })}
    </div>
}

export default ToDoList;