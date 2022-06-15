import React from "react";

function Summary({ completedTasks }) {
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{completedTasks}</p>
    </div>
  );
}

export default Summary;
