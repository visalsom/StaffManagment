// components/StaffForm.js
import React, { useState } from 'react';
import axios from 'axios';

const StaffForm = ({ onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [bod, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data, perform any additional logic if needed

    // Create a staff object with the form data
    const newStaff = {
      fullName,
      bod,
      gender,
    };
    console.log(newStaff)
    const response = await axios.post('http://localhost:5037/api/staff', newStaff);
    // Pass the staff data to the parent component
    onSubmit(newStaff);

    // Reset the form fields
    setFullName('');
    setBirthday('');
    setGender('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-6">
      <div className="mb-3 ">
        <h1 className='py-2'>Add New Staff</h1>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
          Birthday
        </label>
        <input
          id="birthday"
          name="birthday"
          placeholder="yyyy/mm/dd"
          value={bod}
          onChange={(e) => setBirthday(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="1">Male</option>
          <option value="2">Female</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Staff
      </button>
    </form>
  );
};

export default StaffForm;
