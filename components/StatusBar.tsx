import React from 'react';

export type ApiStatus = 'operational' | 'error' | 'checking';

interface StatusBarProps {
  status: ApiStatus;
  message: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ status, message }) => {
  const statusStyles = {
    checking: {
      dot: 'bg-yellow-500 animate-pulse',
      text: 'text-gray-700 dark:text-gray-300',
      container: 'bg-white dark:bg-slate-700'
    },
    operational: {
      dot: 'bg-green-500',
      text: 'text-green-800 dark:text-green-200',
      container: 'bg-green-100 dark:bg-green-900/50'
    },
    error: {
      dot: 'bg-red-500',
      text: 'text-red-800 dark:text-red-200',
      container: 'bg-red-100 dark:bg-red-900/50'
    }
  };
  
  const currentStyle = statusStyles[status];

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 py-2 px-4 rounded-full shadow-lg border border-black/10 dark:border-white/10 ${currentStyle.container}`}>
      <span className={`w-2.5 h-2.5 rounded-full ${currentStyle.dot}`}></span>
      <p className={`text-xs font-semibold ${currentStyle.text}`}>{message}</p>
    </div>
  );
};
