import { Request, Response } from "express";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
const saltRounds = 10;

//Create
export const createUser = async (req: Request, res: Response) => {
  try {
    const { fullName, identificationNumber, phoneNumber, email, address, password } = req.body;
    //Instanciamos
    const user = new User();
    user.fullName = fullName;
    user.identificationNumber = identificationNumber;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.address = address;
    user.password = await bcrypt.hash(password, saltRounds);
    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};


//Update
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { phoneNumber, email, address } = req.body;
    //Llamamos el modelo de user y buscamos por la propiedad ID
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).json({ message: "User does not exists" });
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.address = address;
    //Aqui estoy guardando
    user.save();
    return res.json("Received");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};


 //Delete
export const deleteUser = async (req:Request, res: Response) => {
  try {
    const {id} = req.params;
    const result = await User.delete({ id: parseInt(req.params.id)})
    if( result.affected === 0)
    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
  }
