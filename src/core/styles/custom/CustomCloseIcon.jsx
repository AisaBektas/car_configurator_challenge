import { SvgIcon } from "@mui/material";
import React from "react";

export const CustomCloseIcon = ({ color = "#1c1c1c" }) => {
  return (
    <SvgIcon>
      <path
        d="M18 6L6 18"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
