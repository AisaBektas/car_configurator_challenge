import { Box, Typography } from "@mui/material";
import React from "react";

export const PriceContainer = ({ title, price, hasDiscount = false }) => {
  return (
    <Box display="flex" justifyContent="flex-end" width="100%" pt="3px">
      <Box width="1/2" mr={2.5}>
        <Typography variant="h5" color="text.secondary">
          {title}:
        </Typography>
      </Box>
      <Box width="1/2">
        <Typography
          variant="h5"
          color={hasDiscount ? "text.primary" : "primary"}
          fontWeight={hasDiscount ? 400 : 700}
        >
          {hasDiscount ? "-" + price.toFixed(2) + " " : price.toFixed(2) + " "}
          &euro;
        </Typography>
      </Box>
    </Box>
  );
};
