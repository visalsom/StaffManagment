using AppStaffManagement.Data;
using AppStaffManagement.Dtos.Staff;
using AppStaffManagement.Helpers;
using AppStaffManagement.Interfaces;
using AppStaffManagement.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppStaffManagement.Controllers;

[Route("api/staff")]
[ApiController]

public class StaffController : ControllerBase
{
    private readonly IStaffRepository _repo;
    public StaffController( IStaffRepository repo)
    {
        _repo = repo;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll([FromQuery] QueryObject obj)
    {
        var staff = await _repo.GetAllAsync(obj);
         var staffDto = staff.Select(s => s.ToStaffDto());
        return Ok(staff);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var staff = await _repo.GetByIdAsync(id);
        if (staff == null) return NotFound();
        return Ok(staff.ToStaffDto());
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] AddStaffDto dto)
    {
        var staffModel = dto.ToAddStaffDto();
        await _repo.CreateAsync(staffModel);

        return CreatedAtAction(nameof(GetById), new { id = staffModel.StaffId }, staffModel.ToStaffDto());
    }

    [HttpPut]
    [Route("{id}")]
    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStaffDto dto)
    {
        var staffModel = await _repo.UpdateAsync(id, dto);
        if (staffModel == null) return NotFound();
        return Ok(staffModel.ToStaffDto());
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        var staffModel = await _repo.DeleteAsync(id);
        if (staffModel == null) return NotFound();
        return NoContent();
    }

    // [HttpGet("search")]
    // public IActionResult SearchStaff([FromQuery] string staffId, [FromQuery] int? gender,
    //     [FromQuery] DateTime? fromDate, [FromQuery] DateTime? toDate)
    // {
    // }
} 