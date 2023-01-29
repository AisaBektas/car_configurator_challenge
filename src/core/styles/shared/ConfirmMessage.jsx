import { Box, Button, Typography } from "@mui/material";
import SuccessIcon from "../../../assets/icons/success-icon.svg";
import React from "react";
import { useTranslation } from "react-i18next";

export const ConfirmMessage = ({ handleClose }) => {
  const { t } = useTranslation();
  return (
    <Box px="30px" textAlign="center">
      <Box pt="26px" pb="16px">
        <img src={SuccessIcon} alt="Succes Icon" />
      </Box>
      <Typography variant="h3" fontWeight={500} color="primary">
        {t("CONFIRM_MESSAGE")}
      </Typography>
      <Typography variant="h4" sx={{ marginTop: "10px" }}>
        {t("CONFIRM_DESCRIPTION")} <br /> {t("THANK_YOU")}!
      </Typography>
      <Button
        variant="contained"
        onClick={handleClose}
        sx={{ marginTop: "20px" }}
      >
        {t("CLOSE_BUTTON")}
      </Button>
    </Box>
  );
};
