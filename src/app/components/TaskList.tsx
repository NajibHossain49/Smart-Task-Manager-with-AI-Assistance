'use client';

import { Task } from '../lib/types';
import TaskCard from './TaskCard';

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available. Add a task to get started!</p>
      ) : (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
}