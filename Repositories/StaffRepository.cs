using AppStaffManagement.Data;
using AppStaffManagement.Dtos.Staff;
using AppStaffManagement.Helpers;
using AppStaffManagement.Interfaces;
using AppStaffManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace AppStaffManagement.Repositories;

public class StaffRepository : IStaffRepository
{
    private readonly ApplicationDbContext _context;
    public StaffRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    public  async Task<List<Staff>> GetAllAsync(QueryObject obj)
    {
        var staff = _context.Staff.AsQueryable();
        if (obj.StaffId.HasValue)
        {
            staff = staff.Where(s => s.StaffId==obj.StaffId);
        }
        if (obj.Gender.HasValue)
            staff = staff.Where(s => s.Gender == obj.Gender);
        if (obj.FromDate.HasValue)
            staff = staff.Where(s => s.Birthday >= obj.FromDate);

        if (obj.ToDate.HasValue)
            staff = staff.Where(s => s.Birthday <= obj.ToDate);
        return await staff.ToListAsync();
    }

    public async Task<Staff?> GetByIdAsync(int id)
    {
        return await _context.Staff.FindAsync(id);
    }

    public async Task<Staff> CreateAsync(Staff staff)
    {
        await _context.Staff.AddAsync(staff);
        await _context.SaveChangesAsync();
        return staff;
    }
    
    public async Task<Staff?> UpdateAsync(int id, UpdateStaffDto dto)
    {
        var staff = await _context.Staff.FirstOrDefaultAsync(x => x.StaffId == id);
        if (staff == null) return null;
        staff.FullName = dto.FullName;
        staff.Birthday = dto.Bod;
        staff.Gender = dto.Gender;
        await _context.SaveChangesAsync();
        return staff;
    }

    public async Task<Staff?> DeleteAsync(int id)
    {
       var staff = await _context.Staff.FirstOrDefaultAsync(x => x.StaffId == id);
       if (staff == null) return null;
       _context.Staff.Remove(staff);
       await _context.SaveChangesAsync();
       return staff;
    }
}