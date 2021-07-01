import React from 'react';
import taskMainList from "../List/TaskMainList";
import TaskItem from "./TaskItem";
import { observer } from 'mobx-react';

const TasksList = () => {
    const datalist = taskMainList.data.map((task) => <TaskItem task={task} tasktitle={task.title} taskId={task.id} />);
    return (
        <div>
            <ul> {datalist} </ul>
        </div>
    );
};
export default observer(TasksList);
