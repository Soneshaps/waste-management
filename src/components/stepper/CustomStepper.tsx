import React from 'react';

import {
  Stepper,
  Step,
  StepLabel,
  styled,
  StepConnector,
  stepConnectorClasses,
  type StepIconProps,
  Typography,
  Chip,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export const steps = [
  'Address',
  'Waste Type',
  'Select Skip',
  'Permit Check',
  'Choose Dates',
  'Payment',
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(43, 192, 117) 0%,rgb(43, 192, 117) 50%,rgb(43, 192, 117) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(43, 192, 117) 0%,rgb(43, 192, 117) 50%,rgb(43, 192, 117) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    margin: '0 24px',
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(70, 69, 203) 0%, rgb(70, 69, 203) 50%, rgb(70, 69, 203) 100%)',
        boxShadow: `
      0 0 0 6px white,      /* gap between content and border */
      0 0 0 8px #4645cb,   /* thick colored border */
      0 4px 10px 0 rgba(0,0,0,.25)
    `,
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(43, 192, 117) 0%, rgb(43, 192, 117) 50%, rgb(43, 192, 117) 100%)',
      },
    },
  ],
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement<unknown> } = {
    1: <LocationPinIcon />,
    2: <DeleteIcon />,
    3: <LocalShippingIcon />,
    4: <VerifiedUserIcon />,
    5: <CalendarMonthIcon />,
    6: <PaymentIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

interface CustomStepperProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const CustomStepper: React.FC<CustomStepperProps> = ({ activeStep, setActiveStep }) => {
  const handleStepClick = (index: number) => {
    if (index < activeStep) {
      setActiveStep(index);
    }
  };

  return (
    <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
      {steps.map((label, index) => (
        <Step
          className="cursor-pointer"
          disabled={index > activeStep}
          key={label}
          onClick={() => handleStepClick(index)}
        >
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            <Typography variant="caption" color="text.secondary">
              {`Step ${index + 1}`}
            </Typography>

            <Typography
              variant="body2"
              color="text.primary"
              fontWeight={600}
              style={{ marginTop: '4px', color: index != activeStep ? '#959796' : '#121715' }}
            >
              {label}
            </Typography>

            <Chip
              variant={index > activeStep ? 'outlined' : 'filled'}
              label={
                activeStep === index ? 'In Progress' : index > activeStep ? 'Pending' : 'Completed'
              }
              style={{
                backgroundColor:
                  activeStep === index ? '#f0f0ff' : index > activeStep ? '#ffffff' : '#edf9f0',
                color:
                  activeStep === index ? '#493aaf' : index > activeStep ? '#d8d8d8' : '#1abe73',
                padding: '0px 6px',
                fontSize: '12px',
                marginTop: '12px',
                borderColor: index > activeStep ? '#e7e7e7' : 'none',
                fontWeight: 600,
              }}
              size="small"
            />
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;
