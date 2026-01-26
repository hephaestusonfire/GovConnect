import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gov-blue";
  
  const variants = {
    primary: "border-transparent text-white bg-gov-blue hover:bg-gov-blueLight shadow-lg shadow-gov-blue/20",
    outline: "border-gov-blue text-gov-blue bg-transparent hover:bg-gov-blue/5",
    ghost: "border-transparent text-gov-blue hover:bg-gov-blue/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};