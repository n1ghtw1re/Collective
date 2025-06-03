
import React, { useState, useId } from 'react';
import { Input } from './input';
import { sanitizeInput, validateEmail } from '../../utils/inputSanitizer';

interface ValidatedInputProps {
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  label: string;
  className?: string;
  maxLength?: number;
}

const ValidatedInput: React.FC<ValidatedInputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  label,
  className = "",
  maxLength = 500
}) => {
  const [error, setError] = useState<string>('');
  const [touched, setTouched] = useState(false);
  const inputId = useId();

  const validateInput = (inputValue: string) => {
    if (required && !inputValue.trim()) {
      setError(`${label} is required`);
      return false;
    }

    if (type === 'email' && inputValue && !validateEmail(inputValue)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (inputValue.length > maxLength) {
      setError(`${label} cannot exceed ${maxLength} characters`);
      return false;
    }

    setError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeInput(e.target.value);
    onChange(sanitizedValue);
    
    if (touched) {
      validateInput(sanitizedValue);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validateInput(value);
  };

  return (
    <div className={className}>
      <label 
        htmlFor={inputId}
        className="block font-mono text-white mb-2"
      >
        {label}
        {required && <span className="text-cyberpunk-red ml-1" aria-label="required">*</span>}
      </label>
      <Input
        id={inputId}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white placeholder:text-white/40 ${
          error ? 'border-cyberpunk-red focus:border-cyberpunk-red' : ''
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        maxLength={maxLength}
      />
      {error && (
        <p 
          id={`${inputId}-error`}
          className="mt-1 text-sm text-cyberpunk-red font-mono"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default ValidatedInput;
