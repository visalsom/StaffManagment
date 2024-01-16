using AppStaffManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace AppStaffManagement.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbContextOptions)
    :base(dbContextOptions)
    {
        
    }
    public DbSet<Staff> Staff { get; set; }
    
    
}