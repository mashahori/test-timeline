import { FC } from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#f2711c",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "#f2711c",
  },
}));

export const StyledButton: FC<ButtonProps> = ({ children, ...props }) => (
  <Button type="button" variant="contained" size="small" {...props}>
    {children}
  </Button>
);
