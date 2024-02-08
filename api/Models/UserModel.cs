using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models
{
    public class UserModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public String id { get; set; } = String.Empty;

        [BsonElement("isActive")]
        public bool isActive { get; set; } = true;

        [BsonElement("fullname")]
        public string fullname { get; set; } = String.Empty;

        [BsonElement("idType")]
        public string idType { get; set; } = String.Empty;

        [BsonElement("idNumber")]
        public string idNumber { get; set; } = String.Empty;

        [BsonElement("phone")]
        public string phone { get; set; } = String.Empty;

        [BsonElement("vehicleId")]
        public string vehicleId { get; set; } = String.Empty;

        [BsonElement("vehicleType")]
        public string vehicleType { get; set; } = String.Empty;

        [BsonElement("notes")]
        public string notes { get; set; } = String.Empty;

        [BsonElement("createdAt")]
        public DateTime createdAt { get; set; } = DateTime.Now;

        [BsonElement("updatedAt")]
        public DateTime updatedAt { get; set; } = DateTime.Now;
    }
}
