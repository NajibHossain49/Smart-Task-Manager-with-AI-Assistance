import TaskList from './components/TaskList';
import { getTasks } from './lib/storage';

export default function Home() {
  const tasks = getTasks();
  return <TaskList tasks={tasks} />;
}