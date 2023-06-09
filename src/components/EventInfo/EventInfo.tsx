import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./EventInfo.css";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#f2711c",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "#f2711c",
  },
}));

export const EventInfo = () => (
  <div>
    <h2 className="title">Touch Rugby</h2>
    <StyledButton variant="contained" size="small">
      View Event
    </StyledButton>
  </div>
);
