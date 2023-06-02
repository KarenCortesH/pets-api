import { Router } from "express";
import { createPet, deletePet, getPets, getPet, updatePet } from "../controllers/pet.controllers";

const router = Router();
//devuelve este mensaje cuando visiten la ruta
router.get("/hi", (req, res) => res.send("Hi World"));

//PET//
//route for create Pet
router.post('/pet', createPet);
//route for update Pet
router.patch('/pet/:id', updatePet);
//route for Read Pet
router.get('/pet', getPets);
router.get('/pet/:id', getPet)
//route for delete Pet
router.delete('/pet/:id', deletePet);

export default router