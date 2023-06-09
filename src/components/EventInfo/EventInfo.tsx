import { StyledButton } from "../../ui/StyledButton";
import "./EventInfo.css";

export const EventInfo = ({ startTime }: { startTime: number }) => (
  <>
    <h2 className="title">Touch Rugby {startTime}:00</h2>
    <StyledButton fullWidth>View Event</StyledButton>
  </>
);
