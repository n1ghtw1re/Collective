
import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="text-center py-8">
      <div className={`inline-block ${sizeClasses[size]} animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent`}></div>
      {message && (
        <p className="font-mono text-white/70 mt-4">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
