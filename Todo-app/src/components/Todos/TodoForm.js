import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css"

function TodoForm({ addTodo }) {
    const [todoName, setTodoName] = useState('')

    const onChange = (e) => {
        setTodoName(e.target.value)
    }

    const onClick = (e) => {
        e.preventDefault()
        addTodo(todoName)
        setTodoName('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form className={styles.todoForm}>
                <input className={styles.inputForm} placeholder="Enter new todo" value={todoName} onChange={(e) => { onChange(e) }}></input>
                <Button type="sumbit" title='Submit' onClick={onClick}>Submit</Button>
            </form>
        </div>

    )
}

export default TodoForm;