using backend.Data;
using backend.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[ApiController]
[Route("api/[controller]")]
public class PhoneController : ControllerBase
{

    private readonly AppDbContext _db;

    public PhoneController(AppDbContext db)
    {
        _db = db;
    }
    [HttpPost]
    public async Task<IActionResult> AddPhoneNumber(PhoneDetails phoneDetails)
    {
        try
        {
            _db.Phone.Add(phoneDetails);
            await _db.SaveChangesAsync();
            return Ok(phoneDetails);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "There Some error during add" + ex.Message
            });
        }
    }


    [HttpDelete("{id}/delete")]
    public async Task<IActionResult> deletePhoneNumber(int id)
    {
        try
        {

            var phoneList = await _db.Phone.FindAsync(id);
            if (phoneList == null)
                return NotFound();

            _db.Phone.Remove(phoneList);

            await _db.SaveChangesAsync();

            return Ok(new
            {
                message = "Number deleted successfully"
            });

        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "Error while deleting order",
                error = ex.Message
            });
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAllPhoneNumbers()
    {
        try
        {
            var phoneList = await _db.Phone.ToListAsync<PhoneDetails>();

            return Ok(phoneList);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "Error while getting phone numbers",
                error = ex.Message
            });
        }
    }

}