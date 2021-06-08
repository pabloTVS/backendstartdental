import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { validate } from 'class-validator';

import { Payments } from '../entity/Payment';

export class PaymentController {
    static getAllPayment = async (req: Request, res: Response) => {
        const paymentRepository = getRepository(Payments);
        let payment : any;
        try {
            payment = await paymentRepository.find();
            res.send(payment);
        } catch (e) {
            res.status(400).json({message: e.message});
        }
    }

      //only payment
      static getById = async (req: Request, res: Response) => {
        const {IdCliente} = req.params;
        const paymentRepository = getRepository(Payments);
        let  payment:Payments;
        try {
          payment = await paymentRepository.findOneOrFail(IdCliente);
          res.send(payment);
        } catch (e) {
            res.status(404).json({message: 'Forma de pago no encontrada.'});
        }
      }
  
      //new customer
      static new = async (req: Request, res: Response) => {
        const {Nombre,Tipo,NumPagos} = req.body;
        const payment = new Payments();
  
        payment.Nombre = Nombre;
        payment.Tipo = Tipo;
        payment.NumPagos = NumPagos;
  
        //ejecuto validaciones..
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(payment, validationOpt) ;
        
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
        
        //Try save customer
        const paymentRepository = getRepository(Payments);
        try {
            await paymentRepository.save(payment);
        } 
        catch (e) {
          return res.status(409).json(e.message);
          }
        res.send('Forma de pago creada correctamente');
      }
  
      //update
      static edit = async (req: Request, res: Response) => {
        const {IdFormaPago} = req.params;
        const {Nombre,Tipo,NumPagos} = req.body;
  
        const paymentRepository = getRepository(Payments);
        let payment:Payments;
        //comprobamos
        try {
          payment = await paymentRepository.findOneOrFail(IdFormaPago);
  
          payment.Nombre = Nombre;
          payment.Tipo = Tipo;
          payment.NumPagos = NumPagos;
  
        } catch (e) {
          res.status(404).json({ message: 'No se ha devuelto ninguna forma de pago válida.' });
        }
        //ejecuto validaciones..
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(payment, validationOpt) ;
  
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
      //Try save customer
        try {
          await paymentRepository.save(payment);
        } catch (e) {
          return res.status(409).json({ message: 'Error guardando forma de pago.' });
        }
        res.send('Forma de pago guardada correctamente.');
      }
  
      static delete = async (req: Request, res: Response) => {
        const { IdFormaPago } = req.params;
        const paymentRepository = getRepository(Payments);
        let payment: Payments;
    
        try {
          payment = await paymentRepository.findOneOrFail(IdFormaPago);
        } catch (e) {
          return res.status(404).json({ message: 'Forma de pago inexistente.' });
        }
    
        // Remove customer
        paymentRepository.delete(IdFormaPago);
        res.status(201).json({ message: ' Forma de pago borrada' });
      }
}

export default PaymentController;