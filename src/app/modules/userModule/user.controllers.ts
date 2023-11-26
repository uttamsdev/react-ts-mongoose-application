/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { transporter } from './sendMail';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const userData = {
      id: user.id,
      name: user.name,
      username: user.username,
      password: user.password,
      email: user.email,
      address: {
        state: user.state,
        city: user.city,
        country: user.country,
      },
    };
    const result = await UserServices.createUserToDB(userData);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'User created successfully',
        data: result,
      });
      
      //Nodemailer setup
      const info = await transporter.sendMail({
        from: '"Uttam Kumar Saha" <mail@uttamsaha.com>', // sender address
        to: `${userData.email}`, // list of receivers
        subject: 'Order Confirmed', // Subject line
        text: 'Thanks for ordering.', // plain text body
        // html: '<b>Thanks for ordering</b>', // html body
      });

      console.log('Message sent: %s', info.messageId);
    }
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong.',
      data: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'something went wrong',
      data: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserServices.deleteUserFromDB(Number(id));
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'something went wrong',
      data: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await UserServices.updateUserFromDB(Number(id), data);
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'something went wrong',
      data: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getSingleUserFromDB(Number(id));
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'something went wrong',
      data: error,
    });
  }
};
export const UserControllers = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getSingleUser,
};
