"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reminder_controller_1 = require("../controllers/reminder.controller");
const router = (0, express_1.Router)();
//REMINDER
//route for create inmunization
router.post('/reminder', reminder_controller_1.createReminder);
// route for update reminder
router.patch('/reminder/:id', reminder_controller_1.updateReminder);
// route for delete reminder
router.delete('/reminder/:id', reminder_controller_1.deleteReminder);
//route for get reminders
router.get('/reminder', reminder_controller_1.getReminder);
exports.default = router;
