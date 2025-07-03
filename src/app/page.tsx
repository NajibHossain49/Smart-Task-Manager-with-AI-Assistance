// "use client";

// import { useEffect, useState } from "react";
// import TaskList from "./components/TaskList";
// import { getTasks } from "./lib/storage";
// import { Task } from "./lib/types";

// export default function Home() {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     setTasks(getTasks());
//   }, []);

//   return <TaskList tasks={tasks} />;
// }
// // This component fetches tasks from local storage and displays them using the TaskList component.
// // It uses the useEffect hook to ensure tasks are fetched only once when the component mounts.


'use client';

import { useTasks } from './lib/TaskContext';
import TaskList from './components/TaskList';

export default function Home() {
  const { tasks } = useTasks();
  return <TaskList tasks={tasks} />;
}