import './App.css';
// import list from "./List/List";
import list from "./list";
import TasksList from './components/TasksList';
import AddButton from './components/buttons/AddButton';

function App() {

  return (
    <div >
      <h1>To-do List</h1>
      <AddButton />
      <TasksList />
    </div>
  );
}

export default App;
