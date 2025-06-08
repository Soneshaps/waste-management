import React, { useState } from 'react';
import CustomStepper from '../components/CustomStepper';

const ChooseSkip: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className=' max-w-[1200px] mx-auto'>
      <div style={{marginTop: '24px'}} >
        <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>


    </div>
  );
};

export default ChooseSkip; 