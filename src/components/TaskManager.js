import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './TaskManager.module.css'; // Import the CSS module

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ id: Date.now(), title: "" });
  const [isEditTask, setIsEditTask] = useState(null);
  const [editTaskInput, setEditTaskInput] = useState("");
  const navigate = useNavigate();

  // Add task
  const addTask = () => {
    if (newTask.title.trim()) {
      setTasks((prevState) => [
        ...prevState,
        { ...newTask, id: Date.now() },
      ]);
      setNewTask({ id: Date.now(), title: "" });
    } else {
      alert("Task title cannot be empty!");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  // Enable edit mode
  const enableEditMode = (task) => {
    setIsEditTask(task.id);
    setEditTaskInput(task.title);
  };

  // Save edited task
  const saveEditedTask = (id) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, title: editTaskInput } : task
      )
    );
    setIsEditTask(null);
    setEditTaskInput("");
  };

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("Current User");
    navigate("/auth");
  };

  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <h3>Welcome to Task Manager!</h3>
        <button onClick={handleLogout} className={styles.button}>
            Logout
        </button>
      </div>

      <div className={styles.taskContainer}>
        <p>All Tasks</p>
        {tasks.map((task) => (
          <div key={task.id} className={styles.taskcontainer}>
            {isEditTask === task.id ? (
              <>
                <input
                  value={editTaskInput}
                  name="title"
                  onChange={(e) => setEditTaskInput(e.target.value)}
                  className={styles.taskInput}
                />
                <button onClick={() => saveEditedTask(task.id)} className={styles.button}>
                  Save
                </button>
                <button onClick={() => setIsEditTask(null)} className={styles.button}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p>{task.title}</p>
                <button onClick={() => enableEditMode(task)} className={styles.button}>
                  Edit Task
                </button>
                <button onClick={() => deleteTask(task.id)} className={styles.button}>
                  Delete 
                </button>
              </>
            )}
          </div>
        ))}

        <input
          placeholder="Enter Task Title"
          value={newTask.title}
          onChange={handleInputChange}
          type="text"
          name="title"
          className={styles.taskInput}
        />
        <button onClick={addTask} className={styles.button}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskManager;
