import { FC } from "react";

import { Tooltip, Slider, EventInfo } from "./components";
import { marksFirst, marksSecond } from "./constants/slider";

import "./App.css";

export const App: FC = () => {
  return (
    <div className="wrapper">
      <div className="slider">
        <div className="firstSlider">
          <Slider min={6} max={18} marks={marksFirst} defaultValue={[10, 12]} />
        </div>
        <div className="event">
          <Tooltip>
            <EventInfo />
          </Tooltip>
        </div>
        <div className="secondSlider">
          <Slider
            min={20}
            max={24}
            marks={marksSecond}
            defaultValue={[20, 22]}
          />
        </div>
      </div>
    </div>
  );
};
