import { Box } from "@mui/material";
import React from "react";
import { StyledPrimaryButton } from "../styled/StyledPrimaryButton";
import { StyledSecondaryButton } from "../styled/StyledSecondaryButton";
import { useTranslation } from "react-i18next";

export const StepNavigation = ({
  prevStep,
  currentStep,
  nextStep,
  disabled,
}) => {
  const { t } = useTranslation();
  return (
    <Box display="flex" justifyContent="flex-end" px="20px">
      <StyledSecondaryButton
        onClick={prevStep}
        variant="outlined"
        sx={{
          color: "#1c1c1c",
          borderColor: "#585757",
          marginRight: "20px",
        }}
      >
        {currentStep === 1 ? t("CANCEL_BUTTON") : t("PREVIOUS_BUTTON")}
      </StyledSecondaryButton>
      <StyledPrimaryButton
        variant="contained"
        type="submit"
        onClick={nextStep && nextStep}
        disabled={disabled}
      >
        {currentStep === 4 ? t("SEND_BUTTON") : t("NEXT_BUTTON")}
      </StyledPrimaryButton>
    </Box>
  );
};
