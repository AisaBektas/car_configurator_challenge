import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const StepIntroduction = ({ currentStep, description }) => {
  const { t } = useTranslation();
  return (
    <Box
      px="30px"
      pt={2.5}
      pb={currentStep === 3 || currentStep === 4 ? "20px" : "30px"}
    >
      <Box display={{ md: "flex" }}>
        <Typography
          variant="h4"
          fontWeight={500}
          color="primary"
          sx={{ paddingRight: "10px" }}
        >
          {t("STEP")} {currentStep}.
        </Typography>
        <Typography variant="h4" color="text.primary">
          {description}
        </Typography>
      </Box>
      {currentStep === 4 && (
        <Box pt="10px">
          <Typography variant="h5" color="text.secondary">
            {t("CHECK_MESSAGE")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
