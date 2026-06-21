import React from "react";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className = "",
  ...props
}) {
  const baseClasses =
    "flex h-10 w-full rounded-md border px-3 py-2 text-sm transition-colors placeholder:text-slate-500 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

  const stateClasses = error
    ? "border-red-500 focus:ring-red-500 text-red-900 dark:text-red-200"
    : "border-slate-300 dark:border-slate-600 focus:ring-blue-400";

  const themeClasses =
    "bg-white text-black dark:bg-gray-700 dark:text-white";

  const finalClasses = `${baseClasses} ${stateClasses} ${themeClasses} ${className}`;

  return (
    <div className="flex w-full flex-col gap-1.5 mb-4">
      
      {label && (
        <label className="text-sm font-medium text-slate-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={finalClasses}
        {...props}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}