import { Subtask } from './types';

export const suggestSubtasks = async (taskTitle: string): Promise<Subtask[]> => {
  // Mock subtask suggestions based on task title
  const suggestions = [
    { id: crypto.randomUUID(), title: `Research for ${taskTitle}`, completed: false },
    { id: crypto.randomUUID(), title: `Plan ${taskTitle}`, completed: false },
    { id: crypto.randomUUID(), title: `Execute ${taskTitle}`, completed: false },
  ];
  return suggestions;
};