import TaskForm from "../../components/TaskForm";

export default function AddTask() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <TaskForm />
    </div>
  );
}
