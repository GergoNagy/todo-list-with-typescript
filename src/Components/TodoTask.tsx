import React from "react";
import { ITask } from "../InterFaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>Task: {task.taskName}</span>
        <span>Remining: {task.deadLine}</span>
      </div>
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoTask;
