import React from 'react';

export function Button({ children, className = '', variant = 'default', size = 'default', disabled, onClick, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    default: 'bg-slate-800 text-white hover:bg-slate-700',
    outline: 'bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800/50',
    ghost: 'bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white',
  };
  const sizes = {
    default: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-xl',
    sm: 'px-3 py-1.5 text-xs rounded-md',
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
