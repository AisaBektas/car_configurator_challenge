import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import ToolsIcon from "../../../assets/icons/tools-icon.svg";
import { FormDialog } from "../../../core/styles/shared/FormDialog";

export const MainContent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <img src={ToolsIcon} alt="ToolsIcon" />
      <Typography
        variant="h4"
        color="primary"
        textAlign="center"
        sx={{ marginTop: "20px", marginBottom: "30px" }}
      >
        {t("START_DESCRIPTION")}
      </Typography>
      <FormDialog />
    </Fragment>
  );
};
