import React from 'react';

interface IInputProps {
  type: string;
  name: string;
  value: string | number;
  onChange: (name: string, value: string | number) => void;
  placeholder?: string;
  error?: string;
}

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}: IInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      type === 'number' ? Number(e.target.value) || '' : e.target.value;
    onChange(name, inputValue);
  };
  return (
    <div className="flex flex-col items-start gap-2">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value === 0 ? '' : value}
        onChange={handleInputChange}
        className="px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1
        focus:ring-darkBlue focus:border-darkBlue transition duration-300 ease-in-out w-full"
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
