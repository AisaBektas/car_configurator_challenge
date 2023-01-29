import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledTertiaryButton } from "../styled/StyledTertiaryButton";
import EditIcon from "../../../assets/icons/edit-icon.svg";
import { useTranslation } from "react-i18next";

export const CustomEditContainer = ({
  children,
  title,
  handleEdit,
  borderBottom = 0,
}) => {
  const { t } = useTranslation();
  return (
    <Box
      borderBottom={borderBottom}
      sx={{ borderColor: "rgba(0,0,0,0.15)" }}
      mb={borderBottom === 0 ? 0 : "20px"}
      pb={borderBottom === 0 ? "7px" : "20px"}
    >
      <Box display="flex" justifyContent="space-between" pb="10px">
        <Typography variant="h4" fontWeight={500} color="primary">
          {title}
        </Typography>
        <StyledTertiaryButton
          onClick={handleEdit}
          endIcon={<img src={EditIcon} alt="Edit" />}
        >
          {t("EDIT_BUTTON")}
        </StyledTertiaryButton>
      </Box>
      {children}
    </Box>
  );
};
