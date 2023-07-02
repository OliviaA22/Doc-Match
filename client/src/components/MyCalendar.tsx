import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());

  const onDateChange = (value: Value, event: React.ChangeEvent<unknown>) => {
    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <Calendar onChange={onDateChange} value={value} />
    </div>
  );
};

export default MyCalendar;
