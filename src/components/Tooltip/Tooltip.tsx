import { FC, ReactElement } from "react";
import {
  Tooltip as MuiTooltip,
  TooltipProps,
  tooltipClasses,
  Zoom,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { EventInfo } from "../EventInfo";

import "./Tooltip.css";

interface ITooltipProps {
  children: ReactElement;
  startTime: number;
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

export const Tooltip: FC<ITooltipProps> = ({ children, startTime }) => (
  <LightTooltip
    title={<EventInfo startTime={startTime} />}
    placement="top"
    TransitionComponent={Zoom}
  >
    {children}
  </LightTooltip>
);
