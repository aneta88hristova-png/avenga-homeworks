using HomeWork1_1.Interfaces;

namespace HomeWork1_1.Models
{
    public class WebPage : ISearchable
    {
        public string Url { get; set; }
        public string HtmlContent { get; set; }
        public string MetaDescription { get; set; }
        public List<string> Keywords { get; set; }

        public WebPage(string url, string htmlContent, string metaDescription, IEnumerable<string> keywords)
        {
            Url = url;
            HtmlContent = htmlContent;
            MetaDescription = metaDescription;
            Keywords = keywords?.ToList() ?? new List<string>();
        }

      
        public bool Search(string word)
        {
            bool foundInUrl = Url?.IndexOf(word, StringComparison.OrdinalIgnoreCase) >= 0;
            bool foundInHtml = HtmlContent?.IndexOf(word, StringComparison.OrdinalIgnoreCase) >= 0;
            bool foundInMeta = MetaDescription?.IndexOf(word, StringComparison.OrdinalIgnoreCase) >= 0;
            bool foundInKeywords = Keywords.Any(k => k.Equals(word, StringComparison.OrdinalIgnoreCase));

            if (foundInUrl || foundInHtml || foundInMeta || foundInKeywords)
            {
                Console.WriteLine($"  ✓ Found '{word}' in WebPage '{Url}'");
                return true;
            }

            Console.WriteLine($"  ✗ '{word}' NOT found in WebPage '{Url}'");
            return false;
        }
    }
}