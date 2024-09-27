import { useState, useEffect } from "react";
import { Input } from "./ui/input";

interface SearchInputProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export default function SearchInput({ onSearch, initialValue = "" }: SearchInputProps) {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="relative w-full max-w-sm">
      <Input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={handleInputChange}
        className="pr-10"
      />
      {query && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-700"
        >
          &#x2715;
        </button>
      )}
    </div>
  );
}
