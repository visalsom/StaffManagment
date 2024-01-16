using System.ComponentModel.DataAnnotations.Schema;

namespace AppStaffManagement.Models;

public class Staff
{
    public int StaffId { get; set; }
    public string FullName { get; set; }
    public DateTime Birthday { get; set; }
    public int Gender { get; set; }
}