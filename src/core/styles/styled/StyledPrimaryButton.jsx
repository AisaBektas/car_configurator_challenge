import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledPrimaryButton = styled(Button)({
  "&:hover": {
    background: "#0f5096",
    boxShadow: "none",
  },
  "&:disabled": {
    color: "#969696",
    background: "rgba(0,0,0,0.15)",
  },
});
