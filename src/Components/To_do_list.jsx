import { useState } from "react";

const To_do_list = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {

    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }

  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if(index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
      if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1 className="to-do-list-title">To-Do-List</h1>

      <div>
        <input 
        className="to-do-list-input"
          type="text" 
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button 
          className="add-btn btn"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ol className="to-do-list-ol">
        {tasks.map((task, index) => 
              <li key={index}>
                <span className="text">{task}</span>
                <button 
                  className="delete-btn btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button 
                  className="move-btn btn"
                  onClick={() => moveTaskUp(index)}
                >
                  Up
                </button>
                <button 
                  className="move-btn btn"
                  onClick={() => moveTaskDown(index)}
                >
                  Down
                </button>
                </li>
          )}
      </ol>
    </div>
  );
};

export default To_do_list;
