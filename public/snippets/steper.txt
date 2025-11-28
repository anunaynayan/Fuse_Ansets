
"use client";

import {
  Step,
  StepLabel,
  Stepper,
  StepButton,
  styled,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import { useState, forwardRef, useImperativeHandle } from "react";

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

const CheckoutStepper = forwardRef(function CheckoutStepper(
  {
    stepsConfig,
    orientation = "horizontal",
    linear = true,
    onStepChange,
    validateStep,

    activeColor = "#2563eb",
    completedColor = "#22c55e",
    errorColor = "#ef4444",
    defaultColor = "#cbd5e1",

    circleSize = 28,
  }: CheckoutStepperProps,
  ref
) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [key: number]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: number]: boolean }>({});

  const totalSteps = stepsConfig.length;

  const goNext = () => {
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

  const goBack = () => {
    if (activeStep === 0) return;
    setActiveStep((s) => s - 1);
    onStepChange?.(activeStep - 1);
  };

  const finish = () => {
    console.log("Stepper finished ✔️");
  };

  const goToStep = (index: number) => {
    if (linear && !completed[index] && index !== activeStep) return;
    setActiveStep(index);
    onStepChange?.(index);
  };

  /* ---- Expose API to parent ---- */
  useImperativeHandle(ref, () => ({
    next: goNext,
    back: goBack,
    finish,
    goToStep,
    activeStep,
    isLastStep: activeStep === totalSteps - 1,
    isFirstStep: activeStep === 0,
  }));
  /* -------------------------------- */

  const ActiveComponent = stepsConfig[activeStep]?.Component;

  const CustomConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: circleSize / 2,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderTopWidth: 3,
      borderColor: defaultColor,
    },
    [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
      borderColor: completedColor,
    },
    [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
      borderColor: completedColor,
    },
  }));

  const CustomStepIcon = (props: any) => {
    const { active, completed: done, error } = props;

    const bg = error
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
      <Stepper
        activeStep={activeStep}
        orientation={orientation}
        nonLinear={!linear}
        alternativeLabel
        connector={<CustomConnector />}
      >
        {stepsConfig.map((step, index) => (
          <Step key={step.name} completed={completed[index]}>
            <StepButton onClick={() => goToStep(index)}>
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
        {ActiveComponent && <ActiveComponent />}   
    </div>
  );
});

export default CheckoutStepper;
