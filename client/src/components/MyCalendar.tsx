import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  calendarContainer: {
    maxWidth: '400px',
    margin: '0 auto',
  },
});

const MyCalendar: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState<Date | [Date, Date] | null>(new Date());

  const onDateChange = (value: Date | [Date, Date] | null | [Date | null, Date | null]) => {
    if (Array.isArray(value)) {
      
      setValue(value[0] || null);
    } else {
      
      setValue(value);
    } 
  };

  return (
    <div className={classes.calendarContainer}>
      <Calendar
        onChange={(value, _event) => onDateChange(value)}
        value={value}
        calendarType="US"
        locale="en-US"
      />
    </div>
  );
};

export default MyCalendar;