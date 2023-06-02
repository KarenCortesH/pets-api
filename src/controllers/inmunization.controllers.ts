import { Request, Response } from "express";
import { Inmunization } from "../entities/Inmunization";

export const createInmunization = async (req: Request, res: Response) => {
    try {
        const { date, vaccineName, brand, reminder, pet } = req.body;
        const inmunization = new Inmunization();
        inmunization.date = date;
        inmunization.vaccineName = vaccineName;
        inmunization.brand = brand;
        inmunization.reminder = reminder;
        inmunization.pet = pet;
        console.log(inmunization);
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: error.message });
    }
}
