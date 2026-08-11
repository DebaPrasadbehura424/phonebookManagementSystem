using backend.Data;
using backend.models;
using Microsoft.AspNetCore.Mvc;


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

}