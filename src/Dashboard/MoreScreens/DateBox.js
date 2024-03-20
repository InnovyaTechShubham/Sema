import React, { useState } from 'react';
import './DateBox.css'; // You can create a CSS file for styling
import { FaCaretDown } from 'react-icons/fa'; // Import the arrow icon

function DateBox() {
  const [startDate, setStartDate] = useState(getFormattedDate());
  const [endDate, setEndDate] = useState(getEndDate());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to get the current date in "YYYY-MM-DD" format
  function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Function to calculate the end date (30 days from the start date)
  function getEndDate() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);
    const year = endDate.getFullYear();
    const month = String(endDate.getMonth() + 1).padStart(2, '0');
    const day = String(endDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Function to handle date change
  function handleDateChange(event) {
    setStartDate(event.target.value);
    setEndDate(calculateEndDate(event.target.value));
  }

  // Function to calculate the end date based on the selected start date
  function calculateEndDate(startDate) {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 30);
    const year = endDate.getFullYear();
    const month = String(endDate.getMonth() + 1).padStart(2, '0');
    const day = String(endDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="date-box">
      <div className="date-text" onClick={() => setShowDatePicker(!showDatePicker)}>
        This Month: {startDate} - {endDate} <FaCaretDown />
      </div>
      {showDatePicker && (
        <div className="date-picker">
          {/* Date picker options or custom date picker UI can be added here */}
          {/* For example, you can render a custom calendar component */}
        </div>
      )}
    </div>
  );
}

export default DateBox;

