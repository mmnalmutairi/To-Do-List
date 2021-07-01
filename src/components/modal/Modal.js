import Modal from 'react-modal';
import { useState } from 'react';
import taskMainList from "../../List/TaskMainList";

const AddModal = (props) => {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        taskMainList.createTask(task);
        props.closeModal();
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            contentLabel="Add task modal"
        >
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input required type="text" className="form-control" name="title" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <textarea type="text" className="form-control" name="description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Modal>
    );
};

export default AddModal;