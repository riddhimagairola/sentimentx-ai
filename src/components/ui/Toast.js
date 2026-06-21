import React, { useEffect } from 'react';

export default function Toast({ 
  message, 
  type = 'success', 
  isVisible, 
  onClose 
}) {
  // Auto-close the toast after 3 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      // Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  // If it's not visible, don't render it
  if (!isVisible) return null;

  // Base styling for the popup (fixed to the bottom right of the screen)
  const baseClasses = "fixed bottom-4 right-4 px-4 py-3 rounded-md shadow-lg font-medium text-white transition-opacity z-50 flex items-center gap-3";
  
  // Make it green for success, red for error
  const typeClasses = type === 'error' ? "bg-red-600" : "bg-green-600";

  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      <span>{message}</span>
      <button 
        onClick={onClose} 
        className="font-bold text-white opacity-70 hover:opacity-100 transition-opacity"
      >
        ✕
      </button>
    </div>
  );
}