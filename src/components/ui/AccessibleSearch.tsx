
import React, { useState, useId } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';
import { sanitizeSearchQuery } from '../../utils/inputSanitizer';

interface AccessibleSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  value?: string;
  className?: string;
  'aria-label'?: string;
}

const AccessibleSearch: React.FC<AccessibleSearchProps> = ({
  onSearch,
  placeholder = "Search...",
  value = "",
  className = "",
  'aria-label': ariaLabel = "Search"
}) => {
  const [searchValue, setSearchValue] = useState(value);
  const searchId = useId();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = sanitizeSearchQuery(e.target.value);
    setSearchValue(sanitizedValue);
    onSearch(sanitizedValue);
  };

  const handleClear = () => {
    setSearchValue('');
    onSearch('');
  };

  return (
    <div className={`relative ${className}`}>
      <label htmlFor={searchId} className="sr-only">
        {ariaLabel}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search 
            className="h-5 w-5 text-white/50" 
            aria-hidden="true"
          />
        </div>
        <Input
          id={searchId}
          type="search"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          className="pl-10 pr-10 font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white placeholder:text-white/40 focus:ring-2 focus:ring-cyberpunk-green focus:ring-opacity-50"
          aria-label={ariaLabel}
          autoComplete="off"
          spellCheck="false"
        />
        {searchValue && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/50 hover:text-white"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AccessibleSearch;
