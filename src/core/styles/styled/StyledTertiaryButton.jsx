import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledTertiaryButton = styled(Button)({
  padding: "0 2px 0 5px",
  height: "24px",
  fontSize: "16px",
  color: "#1c1c1c",
  "&:hover": {
    background: "rgba(0,0,0,0.04)",
    boxShadow: "none",
  },
  "&:disabled": {
    color: "#969696",
    background: "rgba(0,0,0,0.15)",
  },
});
