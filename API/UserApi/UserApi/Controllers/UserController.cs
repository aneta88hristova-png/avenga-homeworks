using Microsoft.AspNetCore.Mvc;

namespace UserApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        // GET: api/users
        [HttpGet]
        public ActionResult<List<string>> GetUsers()
        {
            return Ok(StaticDb.UserNames);
        }

        // GET: api/users/{index}
        [HttpGet("{index}")]
        public ActionResult<string> GetUserByIndex(int index)
        {
            if (index < 0 || index >= StaticDb.UserNames.Count)
            {
                return NotFound($"User with index {index} not found");
            }

            return Ok(StaticDb.UserNames[index]);
        }
    }
}