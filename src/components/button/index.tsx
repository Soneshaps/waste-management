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
  const baseClasses = `text-sm px-6 py-2 rounded-md mt-4 font-semibold transition-all duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  const variantClasses =
    variant === 'primary'
      ? 'bg-[#4645cb] border-2 border-[#4645cb] text-white hover:bg-[#ffffff] hover:text-[#4645cb]'
      : 'border-2 border-[#878796] text-[#191818de] hover:bg-[#878796] hover:text-white';

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
