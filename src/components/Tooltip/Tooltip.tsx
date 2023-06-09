import { FC, ReactNode } from "react";
import {
  Tooltip as MuiTooltip,
  TooltipProps,
  tooltipClasses,
  Zoom,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import "./Tooltip.css";

interface ITooltipProps {
  children: ReactNode;
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[4],
    fontSize: 11,
    padding: "10px",
  },
}));

export const Tooltip: FC<ITooltipProps> = ({ children }) => (
  <LightTooltip title={children} placement="top" TransitionComponent={Zoom}>
    <button className="eventButton" type="button">
      <img className="logo" src="sportsnetwork.png" alt="event" />
    </button>
  </LightTooltip>
);
