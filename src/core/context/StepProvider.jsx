import { useState, createContext, useContext } from "react";

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [formStep, setFormStep] = useState(1);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <StepContext.Provider
      value={{ formStep, setFormStep, nextFormStep, prevFormStep }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useFormSteps = () => useContext(StepContext);
