namespace AppStaffManagement.Helpers;

public class QueryObject
{
    public int? StaffId { get; set; } = null;
    public int? Gender { get; set; } = null;
    public DateTime? FromDate { get; set; } = null;
    public DateTime? ToDate { get; set; } = null;
}