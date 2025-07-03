'use client';

import { use, useEffect, useState } from 'react';
import TaskForm from '../../components/TaskForm';
import { getTasks } from '../../lib/storage';
import { Task } from '../../lib/types';

export default function EditTask({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Unwrap params with React.use()
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const tasks = getTasks();
    const foundTask = tasks.find((t) => t.id === id);
    setTask(foundTask || null);
  }, [id]);

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