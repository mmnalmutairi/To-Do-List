import React from 'react';
import list from "../list";

const TasksList = () => {
    
    
    const data = list.map(element => <li>{element.title}</li>);

    
    return (
        <div>
            <ul>
            {data}
            </ul>
        </div>
    );
};

export default TasksList;