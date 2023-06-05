import { Request, Response } from "express";
import { Inmunization } from "../entities/Inmunization";
import { Pet } from "../entities/Pet";
import { User } from "../entities/User";

//Create
export const createInmunization = async (req: Request, res: Response) => {
    try {
        const { date, vaccineName, brand, pet } = req.body;
        //Verificacion que el pet exista
        const existingPet = await Pet.findOne({ where: { id: pet } });
        if (!existingPet) throw new Error("cannot get the pet")

        // crear la inmunization
        const inmunization = new Inmunization();
        inmunization.date = date;
        inmunization.vaccineName = vaccineName;
        inmunization.brand = brand;
        inmunization.pet = existingPet;

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
            return res.status(500).json({ message: error.message })
        }
    }
}

//Update
export const updateInmunization = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { date, vaccineName, brand, petId } = req.body;
        //Verificar si exite inmunizacion
        const existingInmunizacition = await Inmunization.findOne({ where: { id: +id } })
        if (!existingInmunizacition) {
            throw new Error("cannot get the Inmunization")
        }
        //Verificacion que el pet exista
        let existingPet;
        if (petId) {
            existingPet = await Pet.findOne({ where: { id: petId } });
            if (!existingPet) throw new Error("cannot get the pet")
        }
        //preload de la inmunization
        const preloadedInmunization = await Inmunization.preload({
            id: existingInmunizacition.id,
            date,
            vaccineName,
            brand,
            pet: existingPet
        });

        //guardar inmunization
        const savedInmunization = await Inmunization.save(preloadedInmunization as Inmunization);

        //retornar el resul
        return res.status(200).json(savedInmunization);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

//Delete
export const deleteInmunization = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const existingInmunization = await Inmunization.findOne({ where: { id: +id } });
        if (!existingInmunization) throw new Error("Cannot get the Inmunization");

        const removedInmunization = await Inmunization.remove(existingInmunization);
        return res.status(200).json(removedInmunization);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}