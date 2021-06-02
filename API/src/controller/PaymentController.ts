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

}

export default PaymentController;