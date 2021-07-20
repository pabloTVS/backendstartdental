import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Users } from '../entity/Users';
import { validate } from 'class-validator';
import { CLIENT_RENEG_WINDOW } from 'node:tls';

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(Users);
    let users;

    try {
      users = await userRepository.find({ select: ['id', 'username', 'password', 'role'] });
    } catch (e) {
      res.status(404).json({ message: '¡¡Algo ha fallado!!' });
    }

    if (users.length > 0) {
     // console.log(users);
      res.send(users);
    } else {
      res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
    }
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userRepository = getRepository(Users);
    try {
      const user = await userRepository.findOneOrFail(id);
      res.send(user);
    } catch (e) {
      res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
    }
  };

  static new = async (req: Request, res: Response) => {
    const { username, password, role} = req.body;
    const user = new Users();

    user.username = username;
    user.password = password;
    user.role = role;

    // Validate
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(user, validationOpt);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // TODO: HASH PASSWORD

    const userRepository = getRepository(Users);
    try {
      user.hashPassword();
      await userRepository.save(user);
    } catch (e) {
      return res.status(409).json({ message: 'Usuario ya existente.' });
    }
    // All ok
    res.send('Usuario creado correctamente.');
  };

  static edit = async (req: Request, res: Response) => {
    let user;

    const { id } = req.params;
    const { username, password, role } = req.body;

    const userRepository = getRepository(Users);
    // Try get user
    try {
      user = await userRepository.findOneOrFail(id);
      user.username = username;
      user.password = password;
      user.role = role;
    } catch (e) {
      return res.status(404).json({ message: 'No se ha encontrado el usuario.' });
    }
    const validationOpt = { validationError: { target: false, value: false } };
    const errors = await validate(user, validationOpt);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // Try to save user
     try {
          // Check password, si la han cambiado la actualizo, en caso contrario no hago nada.
        //encripto clave
//        user.hashPassword();
      await userRepository.save(user);
    } catch (e) {
      return res.status(409).json({ message: 'Username ya está en uso.' });
    }
 
    res.status(201).json({ message: 'Cambios guardados.' });
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userRepository = getRepository(Users);
    let user: Users;

    try {
      user = await userRepository.findOneOrFail(id);
    } catch (e) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Remove user
    userRepository.delete(id);
    res.status(201).json({ message: ' User deleted' });
  };

  static changePassword = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { password } = req.body;

    const userRepository = getRepository(Users);
    let user: Users;

    try {
      user = await userRepository.findOneOrFail(id);
      user.password = password;
    } catch (e) {
      res.status(400).json({ message: '¡¡Algo ha fallado!!' });
    }

    const validationOps = { validationError: { target: false, value: false } };
    const errors = await validate(user, validationOps);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // Hash password
    user.hashPassword();
    userRepository.save(user);
    res.status(201).json({ message: 'Contraseña actualizada correctamente.'  });
  };




  static oldPas: any;
}

export default UserController;
