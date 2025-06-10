import { css } from '@emotion/react';

import MobileStepper from '@mui/material/MobileStepper';

import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const progressStyle = css`
  position: relative;
  overflow: hidden;
  display: block;
  height: 4px;
  z-index: 0;
  background-color: #e7e8fa;
  width: 100%;
`;

const progressActiveStyle = css`
  background-color: #4645cb;
`;

const ActiveStateToTitleMap = {
  0: 'Address',
  1: 'Waste Type',
  2: 'Skip Size',
  3: 'Permit Check',
  4: 'Choose Date',
  5: 'Payment',
};

const ActiveStateToIconMap = {
  0: <LocationPinIcon />,
  1: <DeleteIcon />,
  2: <LocalShippingIcon />,
  3: <VerifiedUserIcon />,
  4: <CalendarMonthIcon />,
  5: <PaymentIcon />,
};

interface CustomStepperProps {
  activeStep: number;
}

export default function ProgressMobileStepper({ activeStep }: CustomStepperProps) {
  return (
    <div>
      <div className="px-4 flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full border-2 border-[#4645cb] flex items-center justify-center">
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#4645cb] text-white">
            {ActiveStateToIconMap[activeStep as keyof typeof ActiveStateToIconMap]}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs font-bold text-[#4645cb]">Step {activeStep + 1} / 6</div>
          <div className="text-sm font-bold text-[#121715]">
            {ActiveStateToTitleMap[activeStep as keyof typeof ActiveStateToTitleMap]}
          </div>
        </div>
      </div>
      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{
          '& .css-31i2i5-MuiLinearProgress-root-MuiMobileStepper-progress': progressStyle,
          '& .css-l16vtb-MuiLinearProgress-bar1': progressActiveStyle,
        }}
        backButton={undefined}
        nextButton={undefined}
      />
    </div>
  );
}
