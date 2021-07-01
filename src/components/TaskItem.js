import DeleteButton from "./buttons/DeleteButton"
import { observer } from "mobx-react";
const TaskItem = (props) => {

    return (

        <li>{props.task.title}
            <DeleteButton taskId={props.task.id} />
        </li>
    )
}

export default observer(TaskItem);