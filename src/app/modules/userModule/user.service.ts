import { TUser } from "./user.interface"
import { Users } from "./user.model"

const createUserToDB = async(user : TUser)=> {
    const result = await Users.create(user);
    return result;
}

const getAllUserFromDB = async() => {
    const result = await Users.find();
    return result;
}

const deleteUserFromDB = async(id: number) => {
    const result = await Users.deleteOne({id: id});
    return result;
}

const updateUserFromDB = async(id: number, data : TUser) => {
    const result = await Users.updateOne({id: id},data);
    return result;
}
const getSingleUserFromDB = async(id: number) => {
    const result = await Users.findOne({id: id})
    return result;
}

export const UserServices = {
    createUserToDB,
    getAllUserFromDB,
    deleteUserFromDB,
    updateUserFromDB,
    getSingleUserFromDB
}