"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pet_controllers_1 = require("../controllers/pet.controllers");
const router = (0, express_1.Router)();
//devuelve este mensaje cuando visiten la ruta
router.get("/hi", (req, res) => res.send("Hi World"));
//PET//
//route for create Pet
router.post('/pet', pet_controllers_1.createPet);
//route for update Pet
router.patch('/pet/:id', pet_controllers_1.updatePet);
//route for Read Pet
router.get('/pet', pet_controllers_1.getPets);
//route for delete Pet
router.delete('/pet/:id', pet_controllers_1.deletePet);
exports.default = router;
