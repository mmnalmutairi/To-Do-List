import taskMainList from "../../List/TaskMainList";

const deleteButton = (props) => {

    const handleDelete = () => {
        taskMainList.deleteTask(props.taskId);

    }
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default deleteButton;