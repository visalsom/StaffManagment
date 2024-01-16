
import { useState } from 'react';
import axios from 'axios';

const UpdateStaff = () => {
  const [staffId, setStaffId] = useState(''); // Assuming id is a string
  const [fullname, setFullname] = useState('');
  const [bod, setBirthday] = useState('');
  const [gender, setGender] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5037/api/staff/${staffId}`,
        {
          fullname,
          bod,
          gender,
        }
      );

      console.log('Update successful:', response.data);
    } catch (error) {
      console.error('Error updating staff:', error);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="mb-4 p-6">
        <h1 className="py-2">Update Staff</h1>
        <div className="mb-3">
        <label htmlFor="StaffId" className="block text-sm font-medium text-gray-700">
          StaffId
        </label>
        <input
          type="text"
          id="staffid"
          name="staffId"
          value={staffId}
          onChange={(e) => setStaffId(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
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
        Update
      </button>
    </form>
  );
};

export default UpdateStaff;
