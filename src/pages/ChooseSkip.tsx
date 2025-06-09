import React, { useEffect, useRef, useState } from 'react';
import { useSkips } from '../hooks/useSkips';
import type { Skip } from '../services/skipService';
import Title from '../components/title';
import SelectSkipInput from '../components/select-skip-input';
import SkipDetail from '../components/skip-detail';

const ChooseSkip: React.FC = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const { data: skips } = useSkips('NR32', 'Lowestoft');

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedSkip]);

  return (
    <div ref={scrollRef} className="max-w-[1000px] mx-auto px-8 pb-24 overflow-y-auto">
      <Title
        title="Choose Skip Size"
        description="Select the skip size that best suits your needs"
      />

      <SelectSkipInput
        skips={skips ?? []}
        selectedSkip={selectedSkip}
        setSelectedSkip={setSelectedSkip}
      />

      {selectedSkip && <SkipDetail selectedSkip={selectedSkip} />}
    </div>
  );
};

export default ChooseSkip;
