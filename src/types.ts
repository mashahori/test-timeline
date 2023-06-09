import { ReactNode } from "react";

export interface SliderEvent {
  width: number;
  leftPosition: number;
  start: number;
}

export interface IEvent {
  start: number;
  end: number;
}

export interface Mark {
  value: number;
  label: ReactNode;
}
