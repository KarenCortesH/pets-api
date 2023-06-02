import { Router } from "express";
import { createInmunization } from "../controllers/inmunization.controllers";
const router = Router();

//INMUNIZATION

//route for create user
router.post('/inmunization', createInmunization);