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
            return users;
        }

        [HttpGet("inactive")]
        public ActionResult<List<UserModel>> findAllInactives()
        {
            var users = _user.findAllInactives();
            return users;
        }

        [HttpGet("{idType}/{idNumber}")]
        public ActionResult<UserModel> findById(string idType, string idNumber)
        {
            var users = _user.findById(idType, idNumber);
            return users;
        }

        [HttpGet("{vehicleId}")]
        public ActionResult<UserModel> findByVehicleId(string vehicleId)
        {
            var users = _user.findByVehicleId(vehicleId);
            return users;
        }

        [HttpGet]
        public ActionResult<List<UserModel>> findAllDistinct()
        {
            var users = _user.findAllDistinct();
            return users;
        }

        [HttpGet("car")]
        public ActionResult<List<UserModel>> findAllCars()
        {
            var users = _user.findAllCars();
            return users;
        }

        [HttpGet("motorcycle")]
        public ActionResult<List<UserModel>> findAllMotorcycle()
        {
            var users = _user.findAllMotorcycle();
            return users;
        }

        [HttpGet("bicycle")]
        public ActionResult<List<UserModel>> findAllBicycle()
        {
            var users = _user.findAllBicycle();
            return users;
        }

        [HttpPost]
        public ActionResult<UserModel> upsert([FromBody] UserModel user)
        {
            var users = _user.upsert(user);
            return CreatedAtAction(nameof(upsert), new { id = user.id }, user);
        }
    }
}
