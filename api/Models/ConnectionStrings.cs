using api.Interfaces;

namespace api.Models
{
    public class ConnectionStrings : IConnectionStrings
    {
        public string Collection { get; set; } = string.Empty;
        public string Database { get; set; } = string.Empty;
        public string Server { get; set; } = string.Empty;
    }
}
