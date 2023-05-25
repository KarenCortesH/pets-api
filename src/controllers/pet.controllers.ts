import { Request, Response } from "express";
import { Pet } from "../entities/Pet";
import { error } from "console";

export const createPet = async (req: Request, res: Response) => {
    try {
        const { fullName, breed, gender, color } = req.body;
        const pet = new Pet();
        pet.fullName = fullName;
        pet.breed = breed;
        pet.gender = gender;
        pet.color = color;

        console.log(pet);
        const savePet = await pet.save();
        return savePet;
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deletePet = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Pet.delete({ id: parseInt(req.params.id) });
        console.log(result);
        if (result.affected === 0) return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updatePet = async (req: Request, res: Response) => {
    try {
        const { fullName, breed, gender, color } = req.body;
        const pet = await Pet.findOneBy({ id: parseInt(req.params.id) });
        if (!pet) return res.status(404).json({ message: "Pet does not exits" });
        pet.fullName = fullName;
        pet.breed = breed;
        pet.gender = gender;
        pet.color = color;

        //Aqui guardo los cambios
        pet.save();
        console.log(pet);
        return res.json("Received");
    } catch (error) { }
    if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPets = async (req: Request, res: Response) => {
    try {
        //buscamos todos los datos de la base de datos
        const pets = await Pet.find();
        return res.json(pets);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
