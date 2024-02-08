using api.Interfaces;
using api.Models;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace api.Services
{
    public class UserService : IUser
    {
        private readonly IMongoCollection<UserModel> _collection;
        public UserService(IConnectionStrings connection,
            IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(connection.Database);
            _collection = database.GetCollection<UserModel>(connection.Collection);
        }

        List<UserModel> IUser.findAllActives()
        {
            return _collection.Find(x => x.isActive).ToList();
        }

        List<UserModel> IUser.findAllInactives()
        {
            return _collection.Find(x => !x.isActive).ToList();
        }

        UserModel IUser.findById(string idType, string idNumber)
        {
            return _collection.Find(x => x.idType == idType && x.idNumber == idNumber).FirstOrDefault();
        }

        UserModel IUser.findByVehicleId(string vehicleId)
        {
            return _collection.Find(x => x.vehicleId == vehicleId).FirstOrDefault();
        }

        UserModel IUser.upsert(UserModel user)
        {
            UserModel userFound = _collection.Find(x => x.idType == user.idType && x.idNumber == user.idNumber).FirstOrDefault();
            if (userFound != null)
            {
                _collection.ReplaceOne(x => x.id == userFound.id, user);
            }
            else
            {
                _collection.InsertOne(user);
            }
            return user;
        }
    }
}
