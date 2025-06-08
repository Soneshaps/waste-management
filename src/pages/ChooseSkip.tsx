import React, { useState } from 'react';
import CustomStepper from '../components/CustomStepper';

const ChooseSkip: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className=' max-w-[1200px] mx-auto'>

      <div style={{marginTop: '24px'}} >
        <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>

      <div className='flex justify-center mt-20'>
        <div className='flex flex-col items-center'>
          <div className='text-xl font-bold'>
            Choose Skip Size
          </div>
          <div className='text-sm text-gray-500'>
            Select the skip size that best suits your needs
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSkip; 