import React, { useEffect, useRef, useState } from 'react';
import CustomStepper from '../components/CustomStepper';
import ProgressMobileStepper from '../components/CustomMobileStepper';
import { useSkips } from '../hooks/useSkips';
import type { Skip } from '../services/skipService';

const SkipSizeToImageMap = {
  4: '/images/4-yard-skip.jpg',
  6: '/images/6-yard-skip.jpg',
  8: '/images/8-yard-skip.jpg',
  10: '/images/10-yard-skip.jpg',
  12: '/images/12-yard-skip.jpg',
  14: '/images/14-yard-skip.jpg',
  16: '/images/16-yard-skip.jpg',
  20: '/images/20-yard-skip.jpg',
  40: '/images/40-yard-skip.jpg',
};

const SkipSizeToDimensionMap = {
  4: '1.8m X 1.3m X 0.9m',
  6: '2.6m X 1.7m X 1m',
  8: '3.6m X 1.7m X 1.2m',
  10: '3.6m X 1.8m X 1.5m',
  12: '3.7m X 1.7m X 1.8m',
  14: '3.9m X 1.8m X 1.9m',
  16: '4.1m X 1.9m X 2.1m',
  20: '6.1m X 2.4m X 1.07m',
  40: '8.1m X 3.1m X 2.2m',
};

const ChooseSkip: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);
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
    <div className="max-w-[1200px] mx-auto">
      {/* Desktop */}
      <div
        className="bg-top-to-bottom hidden sticky top-0 z-1 md:block"
        style={{ paddingTop: '24px', paddingBottom: '24px' }}
      >
        <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      {/* Mobile */}
      <div className="bg-top-to-bottom block md:hidden pt-6 sticky top-0 z-1">
        <ProgressMobileStepper activeStep={activeStep} />
      </div>

      {/* Content */}
      <div
        ref={scrollRef}
        className="max-w-[1000px] mx-auto px-8 overflow-y-auto h-[calc(100vh-116px)] md:h-full"
      >
        <div className="flex md:justify-center my-6 md:my-12">
          <div className="flex flex-col md:items-center">
            <div className="text-2xl font-semibold">Choose Skip Size</div>
            <div className="text-base text-gray-500 mt-4">
              Select the skip size that best suits your needs
            </div>
          </div>
        </div>

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

        {selectedSkip && (
          <div className=" flex flex-col md:flex-row bg-[#f9f9f9] rounded-lg shadow-sm p-4 gap-6 shdaow-lg">
            <div className="flex justify-center items-center border bg-[#ffffff] border-4 w-full md:w-[350px] border-[#f4c300] rounded-md shadow-sm">
              <img
                src={SkipSizeToImageMap[selectedSkip.size as keyof typeof SkipSizeToImageMap]}
                alt="skip"
                className="w-full md:w-[300px] h-[221px] object-contain md:object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <div className="text-xl font-medium">{selectedSkip.size} Yard Skip</div>
              <div className="text-lg font-medium text-gray-500">
                &#163;{selectedSkip.price_before_vat}
              </div>
              <hr className="border-gray-200" />
              <div className="text-sm  text-gray-500 pt-2 flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="font-medium">Dimensions</div>
                  <div>
                    {SkipSizeToDimensionMap[selectedSkip.size as keyof typeof SkipSizeToImageMap]}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Capacity</div>
                  <div>35 to 40 bin bags</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Hire Period</div>
                  <div>{selectedSkip.hire_period_days} Days</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Allow Heavy Waste</div>
                  <div>{selectedSkip.allows_heavy_waste ? 'Yes' : 'No'}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Delivery</div>
                  <div>&#163;{selectedSkip.transport_cost ?? 0}</div>
                </div>
                <div className="flex justify-between">
                  <div className="font-medium">Allow in Road</div>
                  <div>{selectedSkip.allowed_on_road ? 'Yes' : 'No'}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className=" grid grid-cols-2 gap-4 pt-2 pb-4">
          <button
            onClick={() => setActiveStep(activeStep - 1)}
            className="border border-2 border-gray-300 text-sm text-gray-300 px-6 py-2 rounded-md  mt-4 font-medium hover:bg-gray-300 hover:text-white transition-all duration-300"
          >
            Previous
          </button>
          {selectedSkip && (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="border border-2 border-[#4645cb] text-sm text-white px-6 py-2 rounded-md  mt-4 font-medium bg-[#4645cb] hover:text-white transition-all duration-300"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseSkip;
