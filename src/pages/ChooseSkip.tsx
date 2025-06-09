import React, { useEffect, useRef, useState } from 'react';
import CustomStepper from '../components/CustomStepper';

const skipSizes = [
  {
    id: 1,
    size: '4 Yards',
  },
  {
    id: 2,
    size: '5 Yards',
  },
  {
    id: 3,
    size: '6 Yards',
  },
  {
    id: 4,
    size: '8 Yards',
  },
  {
    id: 5,
    size: '10 Yards',
  },
  {
    id: 6,
    size: '12 Yards',
  },
  {
    id: 7,
    size: '14 Yards',
  },
  {
    id: 8,
    size: '16 Yards',
  },
  {
    id: 9,
    size: '20 Yards',
  },
  {
    id: 10,
    size: '40 Yards',
  },
];

const ChooseSkip: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedSkip, setSelectedSkip] = useState<{ id: number; size: string } | null>(null);

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
      <div
        className="bg-white hidden sticky top-0 z-1 md:block"
        style={{ paddingTop: '24px', paddingBottom: '24px' }}
      >
        <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      <div
        ref={scrollRef}
        className="max-w-[1000px] mx-auto px-8 overflow-y-auto h-[100vh] md:h-[calc(100vh-195px)]"
      >
        <div className="flex md:justify-center my-12">
          <div className="flex flex-col md:items-center">
            <div className="text-2xl font-semibold">Choose Skip Size</div>
            <div className="text-base text-gray-500 mt-4">
              Select the skip size that best suits your needs
            </div>
          </div>
        </div>

        <div className="text-base pb-4">Select skip size</div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm pb-8">
          {skipSizes.map((skip) => (
            <div
              key={skip.id}
              className={`font-medium cursor-pointer border border-gray-300 rounded-md p-2 text-center ${selectedSkip?.id === skip.id ? 'bg-[#4645cb] text-white border-0' : ''}`}
              onClick={() => setSelectedSkip(skip)}
            >
              {skip.size}
            </div>
          ))}
        </div>

        <div className=" flex flex-col md:flex-row bg-[#f9f9f9] rounded-lg shadow-sm p-4 gap-6 shdaow-lg">
          <div className="border bg-[#ffffff] border-4 w-full md:w-[300px] border-[#f4c300] rounded-md shadow-sm">
            <img
              src={'/images/4-yards-skip.jpg'}
              alt="skip"
              className="w-full md:w-[300px] h-[221px] object-contain md:object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <div className="text-2xl font-medium">4 Yard Skip</div>
            <div className="text-lg font-medium text-gray-500">&#163;278.00</div>
            <hr className="border-gray-200" />
            <div className="text-base text-gray-500 pt-2 flex flex-col gap-1">
              <div className="flex justify-between">
                <div className="font-medium">Dimensions</div>
                <div>12' x 8' x 4'</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Capacity</div>
                <div>35 to 40 bin bags</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Hire Period</div>
                <div>7 Days</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Allow Heavy Waste</div>
                <div>Yes</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Delivery</div>
                <div>&#163;100.00</div>
              </div>
              <div className="flex justify-between">
                <div className="font-medium">Allow in Road</div>
                <div>Yes</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-4 pt-8 pb-4">
          <button className="border border-2 border-gray-300 text-base text-gray-300 px-6 py-2 rounded-md  mt-4 font-medium hover:bg-gray-300 hover:text-white transition-all duration-300">
            Previous
          </button>
          <button className="border border-2 border-[#4645cb] text-base text-white px-6 py-2 rounded-md  mt-4 font-medium bg-[#4645cb] hover:text-white transition-all duration-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseSkip;
