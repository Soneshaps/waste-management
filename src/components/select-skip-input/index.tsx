import type { Skip } from '../../services/skipService';

interface SelectSkipInputProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  setSelectedSkip: (skip: Skip) => void;
}

const SelectSkipInput = ({ skips, selectedSkip, setSelectedSkip }: SelectSkipInputProps) => {
  return (
    <>
      <div className="text-base pb-4">Select skip size</div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm pb-8">
        {skips?.map((skip: Skip) => (
          <div
            key={skip.id}
            className={`font-medium cursor-pointer border border-gray-300 rounded-md p-2 text-center ${selectedSkip?.id === skip.id ? 'bg-[#4645cb] text-white border-0' : ''}`}
            onClick={() => setSelectedSkip(skip)}
          >
            {skip.size} Yards
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectSkipInput;
