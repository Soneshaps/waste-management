import React, { useEffect } from 'react';
import { useSkips } from '../hooks/useSkips';
import Title from '../components/title';
import SelectSkipInput from '../components/select-skip-input';
import SkipDetail from '../components/skip-detail';
import Loader from '../components/loader';
import { useButtonContext } from '../context/ButtonContext';
import { useSelectedSkipContext } from '../context/SelectedSkipContext';

const ChooseSkip: React.FC = () => {
  const { selectedSkip, setSelectedSkip } = useSelectedSkipContext();
  const { data: skips, isLoading } = useSkips('NR32', 'Lowestoft');
  const { setDisabled } = useButtonContext();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedSkip]);

  useEffect(() => {
    setDisabled(selectedSkip === null);

    return () => {
      setDisabled(false);
    };
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
