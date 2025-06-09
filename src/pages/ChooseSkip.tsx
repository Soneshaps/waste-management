import React, { useState } from 'react';
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

  return (
    <div className="max-w-[1200px] mx-auto">
      <div style={{ paddingTop: '24px' }}>
        <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-center mt-16 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold">Choose Skip Size</div>
            <div className="text-base text-gray-500 mt-4">
              Select the skip size that best suits your needs
            </div>
          </div>
        </div>

        <div className="text-base pb-4">Select skip size</div>

        <div className="flex gap-4 flex-wrap text-sm pb-8">
          {skipSizes.map((skip) => (
            <div
              key={skip.id}
              className={`font-medium cursor-pointer w-[120px] border border-gray-300 rounded-md p-2 text-center ${selectedSkip?.id === skip.id ? 'bg-[#4645cb] text-white border-0' : ''}`}
              onClick={() => setSelectedSkip(skip)}
            >
              {skip.size}
            </div>
          ))}
        </div>

        <div className=" flex bg-[#f9f9f9] rounded-lg shadow-sm p-4 gap-6">
          <div className="border border-4 w-[300px] border-[#f4c300] rounded-md ">
            <img
              src={'/images/4-yards-skip.jpg'}
              alt="skip"
              className="w-[300px] h-[221px] object-cover rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <div className="text-2xl font-medium">4 Yard Skip</div>
            <div className="text-lg font-medium text-gray-500">&#163;278.00</div>
            <hr className="border-gray-100" />
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
        <div className="flex justify-between gap-4">
          <button className="border border-2 border-gray-300 text-base text-gray-300 px-6 py-2 rounded-md  mt-4 font-medium hover:bg-gray-300 hover:text-white transition-all duration-300">
            Back
          </button>
          <button className="border border-2 border-[#4645cb] text-base text-white px-6 py-2 rounded-md  mt-4 font-medium bg-[#4645cb] hover:text-white transition-all duration-300">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseSkip;
