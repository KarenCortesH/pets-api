import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  //res.send("Hello World 2");
  const { fullName, identificationNumber, phoneNumber, email, address } =
    req.body;
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
};
