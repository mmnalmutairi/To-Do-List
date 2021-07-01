import Modal from 'react-modal';

const AddModal = (props) => {


    return (
        <Modal 
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            contentLabel="Add task modal"
            >
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <textarea type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Modal>
    );
};

export default AddModal;