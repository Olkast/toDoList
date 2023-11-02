import React, {FC, useState} from "react";
import PencelImg from "../../assets/images/pencel.png"
import CrossImg from "../../assets/images/cross.png"
import styles from "./List.module.css"
import Button from "../Button/Button";
import {ITodo} from "../../models/ITodo";



interface TodoProps {
    id: string;
    isDone: boolean;
    text: string;
    remove: (id: string) => void;
    updateText: (props: {id: string; text: string}) => void;
    updateIsDoneToDo: (props: {id: string; isDone: boolean}) => void;

}


const Todo: FC<TodoProps> = ({id, isDone, text, remove, updateText, updateIsDoneToDo}) => {

    const [value, setValue] = useState(text)
    const [isEdit, setIsEdit] = useState(false)

    const handleRemove = (event: React.MouseEvent) => {
        event.preventDefault()
        remove(id)
    }

    const handleUpdateText = () => {
        updateText({id, text: value})
        setIsEdit(false)
    }
    const changeIsDone = () => {
        updateIsDoneToDo({id, isDone: !isDone})
    }


    return <div className={styles.list}>
        <input onChange={changeIsDone} checked={isDone} type="checkbox" />
        {!isEdit && <div onClick={() => setIsEdit(true)}>{text}</div>}
        {isEdit &&  <input onKeyDown={(event) => {
            if(event.key === 'Enter') {
                handleUpdateText()
            }
        }} autoFocus value={value} onChange={(e) => setValue(e.target.value)}/>}
        <div className={styles.buttons}>
            <Button disabled={!isEdit} onClick={handleUpdateText} srcURI={PencelImg}/>
            <Button onClick={handleRemove} srcURI={CrossImg}/>
        </div>
    </div>
}

export default Todo;