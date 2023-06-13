import { Request, Response } from "express";
import { Inmunization } from "../entities/Inmunization";
import { Reminder } from "../entities/Reminder";

//Create
export const createReminder = async (req: Request, res: Response) => {
    try {
        const { date, description, immunization } = req.body;

        // Verificamos si existe Inmunization
        const existingInmunization = await Inmunization.findOne({ where: { id: immunization } })
        if (!existingInmunization) {
            throw new Error("Cannot get the Inmunization");
        }

        const createdReminder = Reminder.create({
            date,
            description,
            immunization: existingInmunization,
        });

        const savedReminder = await Reminder.save(createdReminder);

        return res.status(201).json(savedReminder);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
//Update
export const updateReminder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { date, description } = req.body;

        const existingReminder = await Reminder.findOne({
            where: { id: +id }
        });

        if (!existingReminder) {
            throw new Error('can not get the reminder');
        }

        //preload de reminder
        const preloadReminder = await Reminder.preload({
            id: existingReminder.id,
            date,
            description,
        });

        //guardar reminder
        const savedReminder = await Reminder.save(preloadReminder as Reminder);

        //Retornar el resultado
        return res.status(200).json(savedReminder);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}
//Delete
export const deleteReminder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const existingReminder = await Reminder.findOne({
            where: { id: +id }
        });
        if (!existingReminder) throw new Error("Cannot get  the reminder")

        const removedReminder = await Reminder.remove(existingReminder);
        return res.status(200).json(removedReminder);
    } catch (error) {
        if (error instanceof Error)
        {
            return res.status(500).json({ message: error.message})
        }

    }

}
//Read
export const getReminder = async (req:Request, res:Response) =>{
    try {
        //Verificar si hay datos en la tabla
        const listReminder = await Reminder.find();
        return res.status(200).json(listReminder);
    } catch (error) {
        if ( error instanceof Error)
        return res.status(500).json({ message : error.message})
    }
}
