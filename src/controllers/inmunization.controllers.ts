import { Request, Response } from "express";
import { Inmunization } from "../entities/Inmunization";
import { Pet } from "../entities/Pet";
import { User } from "../entities/User";

//Create
export const createInmunization = async (req: Request, res: Response) => {
    try {
        const { date, vaccineName, brand, pet, reminder } = req.body;
        //Verificacion que el user exista
        // const { id } = req.params;
        // const existingUser = await User.findOne({ where: { id: +id } })
        // if (!existingUser) {
        //     throw new Error('No se encontro el usuario con id: ${userId}');
        // }
        //Verificacion que el pet exista
        const existingPet = await Pet.findOne({ where: { id: pet } });
        if (!existingPet) throw new Error("cannot get the pet")

        // crear la inmunization
        const inmunization = new Inmunization();
        inmunization.date = date;
        inmunization.vaccineName = vaccineName;
        inmunization.brand = brand;
        inmunization.pet = existingPet;
        inmunization.reminder = reminder;

        const savedInmunization = await inmunization.save();
        // console.log("Saved Inmunization", savedInmunization);

        return res.json(savedInmunization);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

//Read
export const getInmunizations = async (req: Request, res: Response) => {
    try {
        //Buscamos en la tabla si hay datos
        const listInmunization = await Inmunization.find();
        return res.status(200).json(listInmunization);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json( { message: error.message})
        }
    }
}
