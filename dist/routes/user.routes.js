"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
//devuelve este mensaje cuando visiten la ruta
router.get("/hi", (req, res) => res.send("Hi World"));
//USER//
//route for create user
router.post('/users', user_controllers_1.createUser);
//route update user
router.patch('/users/:id', user_controllers_1.updateUser);
//route delete user
router.delete('/users/:id', user_controllers_1.deleteUser);
exports.default = router;
