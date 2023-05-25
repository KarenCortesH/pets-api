import { Router } from "express";
import { createUser , deleteUser, updateUser} from "../controllers/user.controllers";
import { createPet, deletePet } from "../controllers/pet.controllers";

const router = Router();
//devuelve este mensaje cuando visiten la ruta
router.get("/hi",(req, res) => res.send("Hi World"));

//router.post('/users');
//route for create user
router.post('/users', createUser);
//route update user
router.patch ('/users/:id', updateUser);
//route delete user
router.delete('/users/:id',deleteUser);

//route for create Pet
router.post('/pet', createPet);
//route for delete Pet
router.delete('/pet/:id', deletePet);
export default router