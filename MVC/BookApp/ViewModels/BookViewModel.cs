namespace BookApp.ViewModels
{
    public class BookViewModel
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Author { get; set; }
        public string? FormattedPrice { get; set; }    
        public string? AvailabilityStatus { get; set; }  
        public string? DisplayText { get; set; }         
        public string? YearDisplay { get; set; }        
        public string? GenreDisplay { get; set; }        
    }
}