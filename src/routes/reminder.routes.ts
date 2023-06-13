import { Router } from "express";
import { createReminder, deleteReminder, getReminder, updateReminder } from "../controllers/reminder.controller";

const router = Router();

//REMINDER
//route for create inmunization
router.post('/reminder',createReminder);
// route for update reminder
router.patch('/reminder/:id',updateReminder);
// route for delete reminder
router.delete('/reminder/:id', deleteReminder);
//route for get reminders
router.get('/reminder',getReminder);
export default router;