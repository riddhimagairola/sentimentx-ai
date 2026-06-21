import React, { useEffect } from 'react';

export default function Modal({
  isOpen,
  onClose,
  title,
  children
}) {
  // 1. THE ESCAPE KEY LOGIC
  // This tells React to listen to the keyboard whenever the modal is open.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    // Turn the listener on
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    
    // Clean it up when the modal closes so it doesn't break the app
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // 2. THE ON/OFF SWITCH
  // If the modal isn't supposed to be open, don't render anything at all.
  if (!isOpen) return null;

  // 3. THE UI
  return (
    // The dark blurred background
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
      onClick={onClose} // Clicking the dark background closes the modal
    >
      {/* The actual white popup box */}
      <div 
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
        // This stops a click inside the white box from triggering the background click
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* The Header (Title + Close Button) */}
        <div className="mb-5 flex items-center justify-between">
          {title && (
            <h2 className="text-xl font-semibold text-slate-800">
              {title}
            </h2>
          )}
          <button 
            onClick={onClose}
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors font-bold"
          >
            ✕
          </button>
        </div>
        
        {/* The dynamic content you put inside the modal */}
        <div>
          {children}
        </div>
        
      </div>
    </div>
  );
}