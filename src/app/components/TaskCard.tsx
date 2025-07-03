'use client';

import { Task, Subtask } from '../lib/types';
import { useRouter } from 'next/navigation';
import { useTasks } from '../lib/TaskContext';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const router = useRouter();
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  const handleSuggestSubtasks = async () => {
    try {
      const response = await fetch('/api/suggest-subtasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskTitle: task.title }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch subtasks');
      }

      const { subtasks } = await response.json();
      const newSubtasks: Subtask[] = subtasks.map((title: string) => ({
        id: crypto.randomUUID(),
        title,
        completed: false,
      }));

      const updatedTask = { ...task, subtasks: [...(task.subtasks || []), ...newSubtasks] };
      updateTask(updatedTask);
    } catch (error) {
      console.error('Error suggesting subtasks:', error);
      alert('Failed to suggest subtasks. Please try again.');
    }
  };

  const toggleSubtask = (subtaskId: string) => {
    const updatedSubtasks = (task.subtasks || []).map((subtask) =>
      subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
    );
    updateTask({ ...task, subtasks: updatedSubtasks });
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p className="text-sm">Status: {task.status}</p>
      {task.subtasks && task.subtasks.length > 0 && (
        <div className="mt-2">
          <h4 className="text-sm font-medium">Subtasks:</h4>
          <ul className="list-disc pl-5">
            {task.subtasks.map((subtask) => (
              <li key={subtask.id} className="text-sm">
                <input
                  type="checkbox"
                  checked={subtask.completed}
                  onChange={() => toggleSubtask(subtask.id)}
                  className="mr-2"
                />
                {subtask.title}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => router.push(`/tasks/${task.id}`)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={handleSuggestSubtasks}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Suggest Subtasks
        </button>
      </div>
    </div>
  );
}