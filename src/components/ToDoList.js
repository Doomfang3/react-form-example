import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isCompleted: false
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isCompleted: false
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isCompleted: false
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTasks = (taskId) => {
    // Make a deep copy
    const tempTasks = JSON.parse(JSON.stringify(tasks))

    const newTasks = tempTasks.map(task => {
      // Find the task by id
      if (task._id === taskId) {
        const tempTask = {...task}
        // Record the revers state of the isCompleted boolean
        tempTask.isCompleted = !tempTask.isCompleted
        // Return the modified task
        return tempTask
      }
      // Return the task as is
      return task
    })

    setTasks(newTasks)
  }
  
  const countCompletedTasks = () => {
    let count = 0

    tasks.forEach(task => {
      if (task.isCompleted) {
        count += 1
      }
    })

    return count
  }

  return (
    <div>
      <Summary completedTasks={countCompletedTasks()} />

      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} setter={handleTasks} /> )}
      </div>
    </div>
  );
}

export default ToDoList;
