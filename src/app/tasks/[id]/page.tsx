"use client";

import { use, useEffect, useState } from "react";
import TaskForm from "../../components/TaskForm";
import { getTasks } from "../../lib/storage";
import { Task } from "../../lib/types";

export default function EditTask({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const tasks = getTasks();
    const foundTask = tasks.find((t) => t.id === id);
    setTask(foundTask || null);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Loading task...
        </p>
      </div>
    );
  }

  if (!task) {
    return (
      <>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md max-w-md w-full">
          <p className="font-semibold">Task Not Found</p>
          <p className="mt-2">The task you are looking for does not exist.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <TaskForm task={task} />
    </>
  );
}
