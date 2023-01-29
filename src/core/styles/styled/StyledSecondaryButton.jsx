import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledSecondaryButton = styled(Button)({
  "&:hover": {
    background: "rgba(0,0,0,0.04)",
    border: "1px solid #585757",
    boxShadow: "none",
  },
  "&:disabled": {
    color: "#969696",
    background: "rgba(0,0,0,0.15)",
  },
});
