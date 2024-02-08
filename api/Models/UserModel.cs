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
        bool isActive { get; set; } = true;

        [BsonElement("fullname")]
        string fullname { get; set; } = String.Empty;

        [BsonElement("idType")]
        string idType{ get; set; } = String.Empty;

        [BsonElement("idNumber")]
        string idNumber { get; set; } = String.Empty;

        [BsonElement("phone")]
        string phone { get; set; } = String.Empty;

        [BsonElement("vehicleId")]
        string vehicleId { get; set; } = String.Empty;

        [BsonElement("vehicleType")]
        string vehicleType { get; set; } = String.Empty;

        [BsonElement("notes")]
        string notes { get; set; } = String.Empty;

        [BsonElement("createdAt")]
        DateTime createdAt { get; set; } = DateTime.Now;

        [BsonElement("updatedAt")]
        DateTime updatedAt { get; set; } = DateTime.Now;
    }
}
