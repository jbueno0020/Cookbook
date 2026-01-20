import { useEffect } from 'react';

interface ToastProps {
  message: string;
  tone?: 'success' | 'info' | 'warning';
  onDismiss: () => void;
  duration?: number;
}

const toneStyles = {
  success: 'bg-green-600',
  info: 'bg-blue-600',
  warning: 'bg-yellow-600'
};

export function Toast({ message, tone = 'info', onDismiss, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timeout = setTimeout(() => onDismiss(), duration);
    return () => clearTimeout(timeout);
  }, [duration, onDismiss]);

  return (
    <div className="fixed inset-x-0 top-4 z-[1100] flex justify-center px-4">
      <div className={`${toneStyles[tone]} text-white px-4 py-3 rounded-lg shadow-lg font-medium`}>
        {message}
      </div>
    </div>
  );
}
