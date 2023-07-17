import { Router } from "express";
import { createUser, deleteUser, refreshToken, signIn, updateUser } from "../controllers/user.controllers";


const router = Router();
//devuelve este mensaje cuando visiten la ruta
router.get("/hi", (req, res) => res.send("Hi World"));

//USER//
//route for create user
router.post('/users', createUser);
//route update user
router.patch('/users/:id', updateUser);
//route delete user
router.delete('/users/:id', deleteUser);
//route signin
router.post('/users/signin', signIn);
//route UserRefreshToken
router.post('/users/refresh-token', refreshToken);



export default router