using Microsoft. AspNetCore. Http,
using Microsoft.AspNetCore.Mvc;

namespace APIapp.Controllers

[Route("api/[controller]")]
[ApiController]
O references
public class ValuesController : ControllerBase

//https://localhost: [port]/api/values
[HttpGet] //we must specify the Http method
O references
public IEnumerable<string> GetStrings()

return new List<string> { "value1", "value2" };

//https://Localhost: [port]/api/values/more
[HttpGet("more")] //we must add something in the route, to have an unique route
O references
public IEnumerable<string> GetMoreStrings()

return new List<string> { "value1", "value2", "value3" };
I
[Route(D]
[HttpGet("info")] //https://localhost:[port]/api/values/info
O references
public string GetInfo()

return "This is our values controller";

[HttpGet("{id}")] //https://Localhost:[port]/api/values/1
O references
public int GetId(int id)

return id;