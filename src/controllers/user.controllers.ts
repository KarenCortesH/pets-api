import { Request, Response } from "express";
import { User } from "../entities/User";
import bcrypt from "bcrypt";
//import jwt from 'jsonwebtoken';
const jwt = require("jsonwebtoken");
const SECRETE_KEY = "PETS_API";
const saltRounds = 10;

// SignIn
export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    //Verifique si el email existe
    const existingEmail = await User.findOne({ where: { email: email } });

    if (!existingEmail) return res.status(400).json({ message: "User Not Found" });
    //Comprobar si la contraseña coincide, recibe la contraseña que me esta enviando ahora mismo y la que ya tenia
    const existingPass = await bcrypt.compare(
      password,
      existingEmail.password
    );
    //Como no coincide devuelvo null el token y un mensajito
    if (!existingPass)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.signIn({ id: existingEmail.id }, SECRETE_KEY, {
      expiresIn: '5m',
    });

    res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
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
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.delete({ id: parseInt(req.params.id) })
    if (result.affected === 0)
      return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
