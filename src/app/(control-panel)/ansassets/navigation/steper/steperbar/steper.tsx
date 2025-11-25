
 "use client";

 import {
  Step,
  StepLabel,
  Stepper,
  StepButton,
  Button,
  styled,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { useState } from "react";

export interface StepConfig {
  name: string;
  optional?: boolean;
  Component: React.ComponentType<any>;
}

interface CheckoutStepperProps {
  stepsConfig: StepConfig[];
  orientation?: "horizontal" | "vertical";
  linear?: boolean;
  onStepChange?: (step: number) => void;
  validateStep?: (step: number) => boolean;

  
  activeColor?: string;
  completedColor?: string;
  errorColor?: string;
  defaultColor?: string;

  
  circleSize?: number;
}

export default function CheckoutStepper({
  stepsConfig,
  orientation = "horizontal",
  linear = true,
  onStepChange,
  validateStep,

  activeColor = "#2563eb", // blue
  completedColor = "#22c55e", // green
  errorColor = "#ef4444", // red
  defaultColor = "#cbd5e1", // gray

  circleSize = 28, 
}: CheckoutStepperProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [key: number]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: number]: boolean }>({});

  const totalSteps = stepsConfig.length;

  const handleNext = () => {
    const isValid = validateStep ? validateStep(activeStep) : true;

    if (!isValid) {
      setErrors({ ...errors, [activeStep]: true });
      return;
    }

    setErrors({ ...errors, [activeStep]: false });
    setCompleted({ ...completed, [activeStep]: true });

    const nextStep = activeStep + 1;
    if (nextStep < totalSteps) {
      setActiveStep(nextStep);
      onStepChange?.(nextStep);
    }
  };

  const handleStepClick = (index: number) => {
    if (linear && !completed[index] && index !== activeStep) return;

    setActiveStep(index);
    onStepChange?.(index);
  };



  const ActiveComponent = stepsConfig[activeStep]?.Component;

  
  const CustomConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: circleSize / 2 , 
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
[`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 3,
    transition: "all 0.3s ease",
  },

  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: completedColor,
  },

  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: completedColor,
  },




    [`& .${stepConnectorClasses.line}`]: {
      borderTopWidth: 3,
      borderColor: defaultColor, 
    },
  }));




  


  const CustomStepIcon = (props: any) => {
    const { active, completed: done, error } = props;

    const bg =
      error
        ? errorColor
        : active
        ? activeColor
        : done
        ? completedColor
        : defaultColor;

    return (
      <div
        style={{
          width: circleSize,
          height: circleSize,
          borderRadius: "50%",
          backgroundColor: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        {props.icon}
      </div>
    );
  };

  return (
    <div className="w-full space-y-6">

      {/* STEP HEADER */}
      <Stepper
        activeStep={activeStep}
        orientation={orientation}
        nonLinear={!linear}
        alternativeLabel
        connector={<CustomConnector />}
      >
        {stepsConfig.map((step, index) => (
          <Step key={step.name} completed={completed[index]}>
            <StepButton onClick={() => handleStepClick(index)}>
              <StepLabel
                error={!!errors[index]}
                StepIconComponent={(iconProps) => (
                  <CustomStepIcon {...iconProps} icon={index + 1} />
                )}
              >
                <div className="flex flex-col items-center gap-1">
                  {step.name}
                  {step.optional && (
                    <span className="text-xs text-gray-500">Optional</span>
                  )}
                </div>
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {/* ACTIVE COMPONENT */}
      <div className="p-4 border rounded-xl bg-white shadow-sm">
        {ActiveComponent && <ActiveComponent />}
      </div>

      {/* CONTROLS */}
      <div className="flex justify-between">
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={() => {
            setActiveStep(activeStep - 1);
            onStepChange?.(activeStep - 1);
          }}
        >
          Back
        </Button>

        {activeStep < totalSteps - 1 ? (
          <Button variant="outlined" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="outlined" color="success">
            Finish
          </Button>
        )}
      </div>



    </div>
  );
}





