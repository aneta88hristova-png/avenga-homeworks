using System.Collections.Generic;

namespace NotesApp.Data
{
    public static class StaticDb
    {
        // Lista med anteckningar
        public static List<string> SimpleNotes = new List<string>
        {
            "Note 1 - Remember to buy milk",
            "Note 2 - Call customer about invoice",
            "Note 3 - Meeting at 14:00 with team",
            "Note 4 - Send weekly report",
            "Note 5 - Update website content"
        };

        // Om du vill ha fler listor:
        public static List<string> Users = new List<string>
        {
            "User 1 - Anna",
            "User 2 - Johan",
            "User 3 - Maria"
        };
    }
}