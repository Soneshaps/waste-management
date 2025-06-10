import { useButtonContext } from '@/context/ButtonContext';
import { useSelectedSkipContext } from '@/context/SelectedSkipContext';

import type { Skip } from '@/types/Skip';

interface SelectSkipInputProps {
  skips: Skip[];
}

const SelectSkipInput = ({ skips }: SelectSkipInputProps) => {
  const { selectedSkip, setSelectedSkip } = useSelectedSkipContext();
  const { disabled, setDisabled } = useButtonContext();

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
    setDisabled(false);
  };

  return (
    <>
      <div className="text-base font-bold pb-4">Select skip size</div>
      {disabled && <div className="text-sm pb-4 text-red-500">Please select a skip to proceed</div>}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm pb-8">
        {skips?.map((skip: Skip) => (
          <div
            key={skip.id}
            className={`font-medium cursor-pointer border border-gray-300 rounded-md p-2 text-center ${selectedSkip?.id === skip.id ? 'bg-[#4645cb] text-white border-0' : ''}`}
            onClick={() => handleSelectSkip(skip)}
          >
            {skip.size} Yards
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectSkipInput;
