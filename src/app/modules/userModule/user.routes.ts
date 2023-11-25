import express from 'express';
import { UserControllers } from './user.controllers';
const router = express.Router();

router.post("/", UserControllers.createUser);
router.get("/",UserControllers.getAllUsers);
router.delete("/:id",UserControllers.deleteUser)
router.put("/:id",UserControllers.updateUser)
router.get("/:id", UserControllers.getSingleUser)

export const UserRoute = router;