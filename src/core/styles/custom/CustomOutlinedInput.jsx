import {
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export const CustomOutlinedInput = ({
  error,
  label,
  inputProps,
  control,
  name,
  helperText,
  multiline = false,
  rows,
  paddingBottom = "20px",
  onChange = () => {},
}) => {
  return (
    <Box pb={paddingBottom}>
      <FormControl error={error} fullWidth>
        {label && (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginLeft: "10px" }}
          >
            {label}
          </Typography>
        )}
        <Controller
          name={name}
          control={control}
          render={() => (
            <OutlinedInput
              multiline={multiline}
              rows={rows}
              id={name}
              {...inputProps}
              sx={{ height: multiline ? "auto" : "34px" }}
              onChange={onChange}
            />
          )}
        />
        <FormHelperText sx={{ margin: 0 }}>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};
