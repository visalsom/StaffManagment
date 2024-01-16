'use client'

import StaffForm from './components/staffForm';
import StaffList from './components/staffList';
import UpdateStaff from './components/updateStaff';
import './Style/globals.css'


export default function Home() {
  const handleFormSubmit = (newStaff) => {
    // Perform any logic you need with the new staff data
    console.log('New staff data:', newStaff);
    // You may want to update the staff list or perform other actions
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4">Staff Management</h1>
        <StaffList />
        <StaffForm onSubmit={handleFormSubmit} />
        <UpdateStaff/>
    </div>
  );
}
