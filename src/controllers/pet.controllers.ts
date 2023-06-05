import { Request, Response } from "express";
import { Pet } from "../entities/Pet";
import { User } from "../entities/User";
import { error } from "console";

// Create
export const createPet = async (req: Request, res: Response) => {
    try {
        const { fullName, breed, gender, color, userId } = req.body;

        const existingUser = await User.findOne({ where: { id: userId } });

        if (!existingUser) {
            throw new Error('No se encontro el usuario con id: ${userId}');
        }

        const pet = new Pet();
        pet.fullName = fullName;
        pet.breed = breed;
        pet.gender = gender;
        pet.color = color;
        pet.user = existingUser;

        const savedPet = await pet.save();

        console.log('savedPet', savedPet);

        return res.json(savedPet);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

// Read
export const getPets = async (req: Request, res: Response) => {
    try {
        //buscamos todos los datos de la base de datos
        const listPets = await Pet.find();
        return res.status(200).json(listPets);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getPet = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const existingPet = await Pet.findOne({ where: { id: +id } });

        if (!existingPet) throw new Error("cannot get the pet");

        return res.status(200).json(existingPet);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

// Update
export const updatePet = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { fullName, breed, gender, color, userId } = req.body;

        // verifico que el pet exista
        const existingPet = await Pet.findOne({ where: { id: +id } });
        if (!existingPet) throw new Error("cannot get the pet")

        // si me enviaron userId en el body
        // entonces verifico que el usuario exista
        let existingUser;
        if (userId) {
            existingUser = await User.findOne({ where: { id: userId } });

            if (!existingUser) {
                throw new Error("cannot get the user")
            }
        }

        // hago preload del pet
        const preloadedPet = await Pet.preload({
            id: existingPet.id,
            fullName,
            breed,
            gender,
            color,
            user: existingUser,
        });

        // guardo los cambios en pet
        const savedPed = await Pet.save(preloadedPet as Pet);

        // retorno el resultado
        return res.status(200).json(savedPed);
    }
    catch (error) { }
    if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
    }
};

// Delete
export const deletePet = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const existingPet = await Pet.findOne({ where: { id: +id } });
        if (!existingPet) throw new Error("cannot get the pet")

        const removedPet = await Pet.remove(existingPet);

        return res.status(200).json(removedPet);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
