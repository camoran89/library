using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUser _user;
        public UserController(IUser user)
        {
            _user = user;
        }

        [HttpGet("active")]
        public ActionResult<List<UserModel>> findAllActives()
        {
            var users = _user.findAllActives();
            return users is null ? NotFound() : users;
        }

        [HttpGet("inactive")]
        public ActionResult<List<UserModel>> findAllInactives()
        {
            var users = _user.findAllInactives();
            return users is null ? NotFound() : users;
        }

        [HttpGet("{idType}/{idNumber}")]
        public ActionResult<UserModel> findById(string idType, string idNumber)
        {
            var users = _user.findById(idType, idNumber);
            return users is null ? NotFound() : users;
        }

        [HttpGet("{vehicleId}")]
        public ActionResult<UserModel> findByVehicleId(string vehicleId)
        {
            var users = _user.findByVehicleId(vehicleId);
            return users is null ? NotFound() : users;
        }

        [HttpPost]
        public ActionResult<UserModel> upsert([FromBody] UserModel user)
        {
            var users = _user.upsert(user);
            return CreatedAtAction(nameof(upsert), new { id = user.id }, user);
        }
    }
}
