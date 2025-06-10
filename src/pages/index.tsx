import { useState } from 'react';
import ChooseSkip from './ChooseSkip';
import ProgressMobileStepper from '../components/stepper/CustomMobileStepper';
import CustomStepper from '../components/stepper/CustomStepper';
import CustomButton from '../components/button';
import Address from './Address';
import ChooseDate from './ChooseDate';
import WasteType from './WasteType';
import Payment from './Payment';
import PermitCheck from './PermitCheck';
import { useButtonContext } from '../context/ButtonContext';

const activeStepToComponentMap = {
  0: <Address />,
  1: <WasteType />,
  2: <ChooseSkip />,
  3: <PermitCheck />,
  4: <ChooseDate />,
  5: <Payment />,
};

const MainPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);
  const { disabled } = useButtonContext();

  return (
    <div className="min-h-screen bg-bottom-to-top">
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop Stepper */}
        <div className="bg-top-to-bottom hidden sticky top-0 z-1 md:block py-6">
          <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>

        {/* Mobile Stepper */}
        <div className="bg-top-to-bottom block md:hidden pt-6 sticky top-0 z-1">
          <ProgressMobileStepper activeStep={activeStep} />
        </div>

        <div className="max-w-[1000px] mx-auto px-8 pb-24">
          {activeStepToComponentMap[activeStep as keyof typeof activeStepToComponentMap]}
        </div>

        {/* Next and Previous Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#f9fafd] shadow-xl">
          <div className="max-w-[1000px] mx-auto px-8 grid grid-cols-2 gap-4 pt-2 pb-4">
            <CustomButton
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
              variant="secondary"
            >
              Previous
            </CustomButton>
            <CustomButton
              disabled={activeStep === 5 || disabled}
              onClick={() => setActiveStep(activeStep + 1)}
              variant="primary"
            >
              Next
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
