import { useState } from 'react';

import { useButtonContext } from '@/context/ButtonContext';
import { useSelectedSkipContext } from '@/context/SelectedSkipContext';

import CustomButton from '@/components/button';
import CustomStepper from '@/components/stepper/CustomStepper';
import ProgressMobileStepper from '@/components/stepper/CustomMobileStepper';

import Payment from '@/pages/Payment';
import Address from '@/pages/Address';
import WasteType from '@/pages/WasteType';
import ChooseSkip from '@/pages/ChooseSkip';
import ChooseDate from '@/pages/ChooseDate';
import PermitCheck from '@/pages/PermitCheck';

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
  const { disabled, setDisabled } = useButtonContext();
  const { selectedSkip } = useSelectedSkipContext();

  const handleNext = () => {
    if (activeStep === 5) {
      return;
    }

    // Validation
    // TODO: Use react-hook-form to validate the form
    if (activeStep === 2 && selectedSkip === null) {
      setDisabled(true);
      return;
    }

    setActiveStep(activeStep + 1);
  };

  return (
    <div className="min-h-screen bg-bottom-to-top">
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop Stepper */}
        <div className="bg-top-to-bottom hidden sticky top-0 z-1 md:block py-6">
          <CustomStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>

        {/* Mobile Stepper */}
        <div className="bg-top-to-bottom block md:hidden pt-4 sticky top-0 z-1">
          <ProgressMobileStepper activeStep={activeStep} />
        </div>

        {/*Dynamic Main Content */}
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
              Back
            </CustomButton>
            <CustomButton
              disabled={activeStep === 5 || disabled}
              onClick={handleNext}
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
