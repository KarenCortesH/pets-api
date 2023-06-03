import { Router } from "express";
import { createInmunization, getInmunizations } from "../controllers/inmunization.controllers";

const router = Router();

//INMUNIZATION
//route for create Inmunization
router.post('/inmunization', createInmunization);
// //route for read Inmunization
router.get('/inmunization', getInmunizations);

export default router