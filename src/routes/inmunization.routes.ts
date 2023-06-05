import { Router } from "express";
import { createInmunization, deleteInmunization, getInmunizations, updateInmunization } from "../controllers/inmunization.controllers";

const router = Router();

//INMUNIZATION
//route for create Inmunization
router.post('/inmunization', createInmunization);
//route for read Inmunization
router.get('/inmunization', getInmunizations);
//route for update Inmunization
router.patch('/inmunization/:id', updateInmunization);
//route for delete Inmunization
router.delete('/inmunization/:id', deleteInmunization);
export default router