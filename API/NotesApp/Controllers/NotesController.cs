using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesApp.Data;

namespace NotesApp.Controllers
{
    [Route("api/[controller]")] // http://localhost:[port]/api/notes
    [ApiController]
    public class NotesController : ControllerBase
    {
        // GET: api/notes
        [HttpGet]
        public ActionResult<List<string>> GetNotes()
        {
            return Ok(StaticDb.SimpleNotes); // status code 200
        }

        // GET: api/notes/1
        [HttpGet("{index}")] // http://localhost:[port]/api/notes/1
        public ActionResult<string> GetByIndex(int index)
        {
            try
            {
                // Validation
                if (index < 0)
                {
                    return BadRequest("The index cannot have a negative value");
                }

                if (index >= StaticDb.SimpleNotes.Count)
                {
                    return StatusCode(StatusCodes.Status404NotFound,
                        $"Note with index {index} does not exist");
                }

                return Ok(StaticDb.SimpleNotes[index]);
            }
            catch (Exception ex)
            {
                // An error occurred but we still do not know concretely what happened
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "An error occurred, contact your administrator");
            }
        }

        // GET: api/notes/1/2 (noteId/userId)
        [HttpGet("{noteId}/{userId}")] // http://localhost:[port]/api/notes/1/2
        public ActionResult<string> GetNoteByNoteAndUserId(int noteId, int userId)
        {
            try
            {
                // Validation
                if (noteId < 0 || userId < 0)
                {
                    return BadRequest("The ids cannot have negative values");
                }

                // Check if noteId exists
                if (noteId >= StaticDb.SimpleNotes.Count)
                {
                    return NotFound($"Note with id {noteId} does not exist");
                }

                // Return the note (in real app, you would filter by userId too)
                return Ok($"Returning note with id {noteId} and user: {userId}");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "An error occurred, contact your administrator");
            }
        }
        [HttpPost] // http://localhost:[port]/api/notes
        public ActionResult Post([FromBody] string newNote)
        {
            try
            {
                // Validation - check if note is empty or null
                if (string.IsNullOrEmpty(newNote))
                {
                    return BadRequest("Note cannot be empty");
                }

                // Add the new note to the list
                StaticDb.SimpleNotes.Add(newNote);

                // Return 201 Created with the new note
                return StatusCode(StatusCodes.Status201Created, $"The new note was added: {newNote}");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "An error occurred, contact your administrator");
            }
        }
    }
}