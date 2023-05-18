import { Router } from "express";
import { createUser } from "../controllers/user.controllers";

const router = Router();
//devuelve este mensaje cuando visiten la ruta
router.get("/hi",(req, res) => res.send("Hi World"));

//crear user
//router.post('/users');
router.post('/users', createUser);
export default router