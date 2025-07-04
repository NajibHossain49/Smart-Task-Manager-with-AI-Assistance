"use client";

import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import { useTasks } from "./lib/TaskContext";

export default function Home() {
  const { tasks } = useTasks();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate brief loading period
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // 300ms delay for "twinkle of an eye" effect
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Loading tasks...
        </p>
      </div>
    );
  }

  return <TaskList tasks={tasks} />;
}
