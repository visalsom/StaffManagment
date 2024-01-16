// components/StaffList.js
import React, { useEffect, useState } from 'react';
import Staff from './staff';
import axios from 'axios';

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const response = await axios.get('http://localhost:5037/api/staff');
        setStaffList(response.data);
      } catch (error) {
        console.error('Error fetching staff list:', error);
      }
    };

    fetchStaffList();
  }, []);

  const handleDelete = async (StaffId) => {
    try {
        await axios.delete(`http://localhost:5037/api/staff/${StaffId}`);
        setStaffList((prevStaffList) => prevStaffList.filter((staff) => staff.staffId !== StaffId));
    }catch (error) {
        console.error('Error deleting staff:', error);
      }
  }

  return (
    <div className="overflow-x-auto p-6">
  <h1 className="text-3xl font-bold mb-6">Staff List</h1>
  <table className="min-w-full bg-white border border-gray-300 shadow-md">
    <thead>
      <tr className="bg-gray-50">
        <th className="py-3 px-6 border-b text-left text-xs font-medium text-black uppercase tracking-wider">
          Staff ID
        </th>
        <th className="py-3 px-6 border-b text-left text-xs font-medium text-black uppercase tracking-wider">
          Full Name
        </th>
        <th className="py-3 px-6 border-b text-left text-xs font-medium text-black uppercase tracking-wider">
          Birthday
        </th>
        <th className="py-3 px-6 border-b text-left text-xs font-medium text-black uppercase tracking-wider">
          Gender
        </th>
        <th className="py-3 px-6 border-b text-left text-xs font-medium text-black uppercase tracking-wider">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {staffList.map((staff) => (
        <tr key={staff.id} className="hover:bg-gray-100">
          <td className="py-4 px-6 border-b text-black">{staff.staffId}</td>
          <td className="py-4 px-6 border-b text-black">{staff.fullName}</td>
          <td className="py-4 px-6 border-b text-black">{staff.birthday}</td>
          <td className="py-4 px-6 border-b text-black">{staff.gender === 1 ? 'Male' : 'Female'}</td>
          <td className="py-4 px-6 border-b">
            <button
              onClick={() => handleDelete(staff.staffId)}
              className="bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default StaffList;
