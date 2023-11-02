import React, {useState} from "react";
import styles from "./Form.module.css";
import {ToDoListAPI} from "../../services/ToDoListService";

const Form = () => {
    const [createToDo] = ToDoListAPI.useCreateToDoMutation()

    const [value, setValue] = useState('')
    const handleCreate = async () => {
        if (value) {
            const res = await createToDo(value)
            if ('data' in res) {
                setValue('')
            }
        }
    }

    return (
        <div className={styles.form}>
            <input onChange={(e) => setValue(e.target.value)} value={value} className={styles.input} type="text" />
            <button onClick={handleCreate} className={styles.button}>+</button>
        </div>
    )
}

export default Form;