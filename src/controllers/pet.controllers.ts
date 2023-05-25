import { Request, Response } from "express";
import { Pet } from "../entities/Pet";

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
