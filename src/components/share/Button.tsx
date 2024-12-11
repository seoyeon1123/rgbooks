interface IButton {
  type?: 'submit' | 'reset' | 'button';
  description?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ type = 'button', description, onClick, children, disabled }: IButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-darkBlue text-white py-3 rounded-2xl hover:bg-mediumBlue transition duration-300 ease-in-out">
      {children || description} {/* children 우선 사용 */}
    </button>
  );
};

export default Button;
