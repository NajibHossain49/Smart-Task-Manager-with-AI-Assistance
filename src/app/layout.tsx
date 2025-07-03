import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Task Manager',
  description: 'A simple task management system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-4xl mx-auto flex justify-between">
            <h1 className="text-xl font-bold">Task Manager</h1>
            <Link href="/tasks/add" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">
              Add Task
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}