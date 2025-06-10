import React, { useEffect } from 'react';

import { useSkips } from '@/hooks/useSkips';
import { useSelectedSkipContext } from '@/context/SelectedSkipContext';

import Title from '@/components/title';
import Loader from '@/components/loader';
import SkipDetail from '@/components/skip-detail';
import SelectSkipInput from '@/components/select-skip-input';

const ChooseSkip: React.FC = () => {
  const { selectedSkip } = useSelectedSkipContext();
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
          <SelectSkipInput skips={skips ?? []} />

          {selectedSkip && <SkipDetail selectedSkip={selectedSkip} />}
        </>
      )}
    </>
  );
};

export default ChooseSkip;
