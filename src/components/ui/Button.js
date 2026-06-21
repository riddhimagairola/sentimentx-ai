import React from 'react';

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '',
  children,
  ...props 
}) {
  // 1. BASE: These styles apply to every single button
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // 2. SIZES: A simple dictionary object
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 py-2 px-4 text-base",
    lg: "h-11 px-8 text-lg",
  };

  // 3. VARIANTS: The colors
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate-300",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-100",
  };

  // 4. COMBINE: Using standard string interpolation
  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button 
      disabled={disabled}
      className={finalClasses}
      {...props}
    >
      {children}
    </button>
  );
}