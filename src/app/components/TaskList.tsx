"use client";

import Link from "next/link";
import { Task } from "../lib/types";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {tasks.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            {/* Empty State Icon */}
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>

            {/* Empty State Text */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No tasks yet
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              You haven&lsquo;t created any tasks yet. Start organizing your workflow
              by adding your first task!
            </p>

            {/* Call to Action */}
            <div className="space-y-3">
              <Link
                href="/tasks/add"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create Your First Task
              </Link>
              <p className="text-sm text-gray-400">
                Or press the &quot;Add Task&quot; button in the navigation
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Your Tasks</h2>
              <p className="text-gray-600 mt-1">
                {tasks.length} {tasks.length === 1 ? "task" : "tasks"} total
              </p>
            </div>

            {/* Task Statistics */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 font-medium">
                  {tasks.filter((task) => task.status === "completed").length}{" "}
                  Completed
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-700 font-medium">
                  {tasks.filter((task) => task.status === "pending").length}{" "}
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* Task Cards */}
          <div className="grid gap-6">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
