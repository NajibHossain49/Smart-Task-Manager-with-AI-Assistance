import TaskForm from "../../components/TaskForm";
import { getTasks } from "../../lib/storage";

export default function EditTask({ params }: { params: { id: string } }) {
  const tasks = getTasks();
  const task = tasks.find((t) => t.id === params.id);

  if (!task) {
    return <p className="text-center text-red-500">Task not found</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <TaskForm task={task} />
    </div>
  );
}
