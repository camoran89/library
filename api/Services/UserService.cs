using api.Interfaces;
using api.Models;

namespace api.Services
{
    public class UserService : IUser
    {
        List<UserModel> IUser.findAllActives()
        {
            throw new NotImplementedException();
        }

        List<UserModel> IUser.findAllInactives()
        {
            throw new NotImplementedException();
        }

        UserModel IUser.findById(string idType, string idNumber)
        {
            throw new NotImplementedException();
        }

        UserModel IUser.findByVehicleId(string vehicleId)
        {
            throw new NotImplementedException();
        }

        UserModel IUser.upsert(UserModel model)
        {
            throw new NotImplementedException();
        }
    }
}
