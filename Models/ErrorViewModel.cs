using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace sortingHat.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }

     public class HomeViewModel
    {
        private string _src;
        public HomeViewModel()
        {
            
        }
        public string RandomSrc {
            get
            {
                var number = new Random().Next(1,7);
                var pattern = "^"+number; 
                var src = Directory.GetFiles("wwwroot/Sounds").Where(p=> Regex.IsMatch(Path.GetFileName(p), pattern)).First();
                src = src.Replace("wwwroot", string.Empty);
                src = src.Replace("/", "\\");
                Console.WriteLine(src); 
                return src; 
            }
            set{
                _src = value; 
            }
        }
    }
}