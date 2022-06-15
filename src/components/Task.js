function Task({ task, setter }) {
  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{task.name}</h1>
        {task.isCompleted
          ? <span>DONE ✅</span>
          : <span>PENDING ⌛</span>
        }

        <h2> Task Description </h2>
        <p>{task.description}</p>

        <button className="add" onClick={() => setter(task._id)}>
          {task.isCompleted
            ? <span>UNDO ❌</span>
            : <span>✔️</span>
          }
        </button>

      </div>
    </div>
  );
}

export default Task;
