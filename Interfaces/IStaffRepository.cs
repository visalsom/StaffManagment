using AppStaffManagement.Dtos.Staff;
using AppStaffManagement.Helpers;
using AppStaffManagement.Models;

namespace AppStaffManagement.Interfaces;

public interface IStaffRepository
{
    Task<List<Staff>> GetAllAsync(QueryObject obj);
    Task<Staff?> GetByIdAsync(int id );
    Task<Staff> CreateAsync(Staff staff);
    Task<Staff?> UpdateAsync(int id, UpdateStaffDto dto);
    Task<Staff?> DeleteAsync(int id);
}