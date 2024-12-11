import { FaUser, FaTag, FaBox } from 'react-icons/fa';

interface BookInfoFieldProps {
  label: string;
  value: string | number;
  editMode: boolean;
  onChange: (value: string | number) => void;
  type: 'text' | 'number';
}

const BookInfo = ({ label, value, editMode, onChange, type }: BookInfoFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = type === 'number' ? parseFloat(e.target.value) : e.target.value;
    onChange(newValue);
  };

  return (
    <div className="flex flex-row gap-2">
      {label === '저자' && <FaUser className="text-lg text-gray-500" />}
      {label === '가격' && <FaTag className="text-lg text-gray-500" />}
      {label === '수량' && <FaBox className="text-lg text-gray-500" />}
      <span className="text-lg text-gray-700 font-semibold">{label}:</span>
      {editMode ? (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          className="text-lg text-gray-600 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-darkBlue transition-colors"
        />
      ) : (
        <p className="text-lg text-gray-600">{value}</p>
      )}
    </div>
  );
};

export default BookInfo;
