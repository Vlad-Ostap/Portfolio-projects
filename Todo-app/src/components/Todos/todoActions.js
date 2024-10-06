import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import Button from "../UI/Button"
import styles from "./todoActions.module.css"

function TodoActions({ resetTodos, deleteCompletedTodos, completedTodoExist }) {

    return (
        <div className={styles.todosActionsContainers}>
            <Button title="Reset Todos" onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title="Clear Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodoExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodoActions;