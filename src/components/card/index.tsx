interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className=" flex flex-col md:flex-row bg-[#f9f9f9] rounded-lg shadow-sm p-4 gap-6 shadow-md">
      {children}
    </div>
  );
};

export default Card;
