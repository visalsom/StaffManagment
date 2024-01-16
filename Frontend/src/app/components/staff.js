// components/Staff.js
import React from 'react';

const Staff = ({ staff }) => {
  return (
    <div className="border p-4 mb-4">
      <p>Staff ID: {staff.staffId}</p>
      <p>Full Name: {staff.fullName}</p>
      <p>Birthday: {staff.birthday}</p>
      <p>Gender: {staff.gender === 1 ? 'Male' : 'Female'}</p>
    </div>
  );
};

export default Staff;
