const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#4645cb] text-white rounded-full px-4 py-1 text-xs font-normal">
      {children}
    </div>
  );
};

export default Pill;
