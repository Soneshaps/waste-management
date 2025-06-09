import React, { useEffect, useState } from 'react';
import { useSkips } from '../hooks/useSkips';
import type { Skip } from '../services/skipService';
import Title from '../components/title';
import SelectSkipInput from '../components/select-skip-input';
import SkipDetail from '../components/skip-detail';
import Loader from '../components/loader';

const ChooseSkip: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const { data: skips, isLoading } = useSkips('NR32', 'Lowestoft');

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedSkip]);

  return (
    <>
      <Title
        title="Choose Skip Size"
        description="Select the skip size that best suits your needs"
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SelectSkipInput
            skips={skips ?? []}
            selectedSkip={selectedSkip}
            setSelectedSkip={setSelectedSkip}
          />
          {selectedSkip && <SkipDetail selectedSkip={selectedSkip} />}
        </>
      )}
    </>
  );
};

export default ChooseSkip;
