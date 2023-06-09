import { SLIDER_START, SLIDER_STEP } from "../constants/slider";
import { IEvent } from "../types";

export const getNewEvent = ({ start, end }: IEvent) => {
  const width = SLIDER_STEP * (end - start);
  const leftPosition = (start - SLIDER_START) * SLIDER_STEP;
  return { width, leftPosition, start };
};
