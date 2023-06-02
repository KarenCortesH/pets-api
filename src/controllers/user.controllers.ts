import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    //res.send("Hello World 2");
    const { fullName, identificationNumber, phoneNumber, email, address } =
      req.body;
    //throw new Error("My Error de Prueba!!!");
    //Instanciamos
    const user = new User();
    user.authUid = "sdfdsvxcxcvxcvxcxvcxvcx";
    user.fullName = fullName;
    user.identificationNumber = identificationNumber;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.address = address;

    console.log(user);

    const savedUser = await user.save();

    return savedUser;
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

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
    console.log(user);
    return res.json("Received");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req:Request, res: Response) => {
  try {
    const {id} = req.params;
    const result = await User.delete({ id: parseInt(req.params.id)})
    console.log(result);
    if( result.affected === 0)
    return res.sendStatus(204)

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}