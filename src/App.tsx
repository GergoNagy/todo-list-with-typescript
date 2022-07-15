import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./InterFaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handelChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadLine };

    setTodoList([...todoList, newTask]);

    setTask("");
    setDeadline(0);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            value={task}
            placeholder="Task..."
            name="task"
            onChange={handelChange}
          />
          <input
            type="number"
            value={deadLine}
            placeholder="Deadline (in days)..."
            name="deadLine"
            onChange={handelChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask}/>;
        })}
      </div>
    </div>
  );
};

export default App;
