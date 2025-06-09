import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses = `text-sm px-6 py-2 rounded-md mt-4 font-medium transition-all duration-300`;
  const variantClasses =
    variant === 'primary'
      ? 'bg-[#4645cb] border-2 border-[#4645cb] text-white hover:text-white hover:bg-[#ffffff] hover:text-[#4645cb]'
      : 'border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-white';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
