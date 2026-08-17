using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.Xml;

namespace NotesApp.Controllers
{
    [Route("api/[controller]")] // http://localhost:[port]/api/values
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpGet] // http://localhost:[port]/api/values
        public List<string> Get()
        {
            return new List<string>() { "value1", "value2" };
        }

        // [HttpGet]
        // public int GetNumber()
        // {
        //     return 3;
        // }

        [HttpGet("number")] // http://localhost:[port]/api/values/number
        public int GetNumber()
        {
            return 3;
        }

        [HttpPost] // http://localhost:[port]/api/values (POST)
        public string GetString()
        {
            return "Hello";
        }

        [HttpGet("{number}")] // http://localhost:[port]/api/values/5
        public int GetFirstNumber(int number)
        {
            return number;
        }

        [HttpGet("movie/{number}")] // http://localhost:[port]/api/values/movie/5
        public List<string> GetMovies(int number)
        {
            return number > 2
                ? new List<string>() { "movie1", "movie2" }
                : new List<string>() { "movie3" };
        }
    }
}