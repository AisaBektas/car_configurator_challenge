import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCouponButton = styled(Button)({
  padding: 0,
  height: "24px",
  borderBottom: "1px solid transparent",
  borderRadius: 0,
  marginBottom: "5px",
  "&:hover": {
    borderBottom: "1px solid #004289",
    background: "none",
  },
});
