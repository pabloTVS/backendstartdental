import { getRepository } from 'typeorm';
import { Request, Response, text } from 'express';
import { validate } from 'class-validator';

import { Customers  } from '../entity/Customers';

export class CustomerController {
    static getAllCustomer = async (req: Request, res: Response) => {

        const customerRepository = getRepository(Customers);
      
        let customer:any;
        try {
         customer = await customerRepository.find();
          res.send(customer);
          
        } catch (e) {
          res.status(404).json({ message: e.message});
        }
    }
  //only customer
    static getById = async (req: Request, res: Response) => {
      const {IdCliente} = req.params;
      const customerRepository = getRepository(Customers);
      let  customer:Customers;
      try {
        customer = await customerRepository.findOneOrFail(IdCliente);
        res.send(customer);
      } catch (e) {
          res.status(404).json({message: 'Cliente no encontrado.'});
      }
    }

    //new customer
    static new = async (req: Request, res: Response) => {
      const {Nombre,DNINIF,Telefono1,Email1,Fax1,Movil1,CodFormaPago,RE,DtoPP,DtoComercial,CodPostal,Localidad,Provincia,Direccion,Entidad,Oficina,DC,Cuenta,IBAN,BICSWIFT,Observaciones} = req.body;
      const customer = new Customers();

      customer.Nombre = Nombre;
      customer.DNINIF = DNINIF;
      customer.Direccion = Direccion;
      customer.DtoComercial = DtoComercial;
      customer.DtoPP = DtoPP;
      customer.Email1 = Email1;
      customer.Entidad = Entidad;
      customer.Fax1 = Fax1;
      customer.IBAN = IBAN;
      customer.Localidad = Localidad;
      customer.Movil1 = Movil1;
      customer.Observaciones = Observaciones;
      customer.Telefono1 = Telefono1;
      customer.CodFormaPago = CodFormaPago;
      customer.RE = RE;
      customer.CodPostal = CodPostal;
      customer.Provincia = Provincia;
      customer.Oficina = Oficina;
      customer.DC = DC;
      customer.Cuenta = Cuenta;
      customer.BICSWIFT = BICSWIFT;

      //ejecuto validaciones..
      const validationOpt = { validationError: { target: false, value: false } };
      const errors = await validate(customer, validationOpt) ;
      
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      
      //Try save customer
      const customerRepository = getRepository(Customers);
      try {
          await customerRepository.save(customer);
      } 
      catch (e) {
        return res.status(409).json(e.message);
        }
        res.status(201).json({ message: 'Cliente creado correctamente.' });  
    }

    //update
    static edit = async (req: Request, res: Response) => {
      
      const {IdCliente} = req.params;
      const {Nombre,DNINIF,Telefono1,Email1,Fax1,Movil1,CodFormaPago,RE,DtoPP,DtoComercial,CodPostal,Localidad,Provincia,Direccion,Entidad,Oficina,DC,Cuenta,IBAN,BICSWIFT,Observaciones} = req.body;

      const customerRepository = getRepository(Customers);
      let customer:Customers;
      //comprobamos customer
      try {
        customer = await customerRepository.findOneOrFail(IdCliente);

        customer.Nombre = Nombre;
        customer.DNINIF = DNINIF;
        customer.Direccion = Direccion;
        customer.DtoComercial = DtoComercial;
        customer.DtoPP = DtoPP;
        customer.Email1 = Email1;
        customer.Entidad = Entidad;
        customer.Fax1 = Fax1;
        customer.IBAN = IBAN;
        customer.Localidad = Localidad;
        customer.Movil1 = Movil1;
        customer.Observaciones = Observaciones;
        customer.Telefono1 = Telefono1;
        customer.CodFormaPago = CodFormaPago;
        customer.RE = RE;
        customer.CodPostal = CodPostal;
        customer.Provincia = Provincia;
        customer.Oficina = Oficina;
        customer.DC = DC;
        customer.Cuenta = Cuenta;
        customer.BICSWIFT = BICSWIFT;

      } catch (e) {
        res.status(404).json({ message: 'No se ha devuelto ningún cliente.' });
      }
      //ejecuto validaciones..
      const validationOpt = { validationError: { target: false, value: false } };
      const errors = await validate(customer, validationOpt) ;

      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
    //Try save customer
      try {
        await customerRepository.save(customer);
      } catch (e) {
        return res.status(409).json({ message: 'Error guardando cliente.' });
      }
      res.status(201).json({ message: 'Cliente guardado correctamente.' });
    }

    static delete = async (req: Request, res: Response) => {
      const { IdCliente } = req.params;
      const customerRepository = getRepository(Customers);
      let customer: Customers;
  
      try {
        customer = await customerRepository.findOneOrFail(IdCliente);
      } catch (e) {
        return res.status(404).json({ message: 'Cliente inexistente.' });
      }
  
      // Remove customer
      customerRepository.delete(IdCliente);
      res.status(201).json({ message: ' Cliente borrado' });
    };
}

export default CustomerController;