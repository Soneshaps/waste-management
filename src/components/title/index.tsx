interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="flex md:justify-center my-6 md:my-12">
      <div className="flex flex-col md:items-center">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-base text-gray-500 mt-4">{description}</div>
      </div>
    </div>
  );
};

export default Title;
