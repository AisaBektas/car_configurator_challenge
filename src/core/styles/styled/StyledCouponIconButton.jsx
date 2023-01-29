import { IconButton, styled } from "@mui/material";

export const StyledCouponIconButton = styled(IconButton)({
  background: "#004289",
  borderRadius: "3px",
  height: "34px",
  width: "34px",
  marginLeft: "10px",
  "&:hover": {
    background: "#0f5096",
    boxShadow: "none",
  },
  "&:disabled": {
    color: "#969696",
    background: "rgba(0,0,0,0.15)",
  },
});
