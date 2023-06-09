import { FC, useState } from "react";

import { Slider } from "./components";
import { marks } from "./constants/slider";
import { IEvent, Mark, SliderEvent } from "./types";
import { getNewEvent } from "./utils/getNewEvent";
import { StyledButton } from "./ui/StyledButton";

import "./App.css";

export const App: FC = () => {
  const [newMarks, setNewMarks] = useState<Mark[]>(marks);
  const [events, setEvents] = useState<SliderEvent[] | null>(null);

  const handleAddEvent = ({ start, end }: IEvent) => {
    setNewMarks([
      ...newMarks,
      { value: start, label: <span>{start}</span> },
      { value: end, label: <span>{end}</span> },
    ]);

    const newEvent = getNewEvent({ start, end });
    setEvents(events ? [...events, newEvent] : [newEvent]);
  };

  const handleClearEvents = () => {
    setEvents(null);
    setNewMarks(marks);
  };

  return (
    <div className="wrapper">
      <div className="slider">
        <Slider
          min={6}
          max={24}
          marks={newMarks}
          events={events}
          defaultValue={[10, 12]}
        />
      </div>
      <div className="manageButtons">
        <StyledButton onClick={() => handleAddEvent({ start: 13, end: 15 })}>
          add event 13:00
        </StyledButton>
        <StyledButton onClick={() => handleAddEvent({ start: 16, end: 18 })}>
          add event 16:00
        </StyledButton>
        <StyledButton onClick={handleClearEvents}>Clear all</StyledButton>
      </div>
    </div>
  );
};
