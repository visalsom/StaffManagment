using AppStaffManagement.Dtos.Staff;
using AppStaffManagement.Models;

namespace AppStaffManagement.Mappers;

public static class StaffMappers
{
    public static StaffDto ToStaffDto(this Staff staffModel)
    {
        return new StaffDto
        {
            Id = staffModel.StaffId,
            FullName = staffModel.FullName,
            Bod = staffModel.Birthday,
            Gender = staffModel.Gender
        };
    }

    public static Staff ToAddStaffDto(this AddStaffDto dto)
    {
        return new Staff
        {
            FullName = dto.FullName,
            Birthday = dto.Bod,
            Gender = dto.Gender
        };
    }
}