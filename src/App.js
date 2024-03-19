import "./App.css";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import NotesList from "./components/NotesList";

function App() {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <h2>Calendar with notes</h2>

      <DayPicker selected={selectedDay} onDayClick={handleDayClick} />

      {selectedDay && <NotesList selectedDay={selectedDay} />}
    </div>
  );
}

export default App;
