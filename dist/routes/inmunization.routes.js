"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inmunization_controllers_1 = require("../controllers/inmunization.controllers");
const router = (0, express_1.Router)();
//INMUNIZATION
//route for create Inmunization
router.post('/inmunization', inmunization_controllers_1.createInmunization);
// //route for read Inmunization
router.get('/inmunization', inmunization_controllers_1.getInmunizations);
exports.default = router;
