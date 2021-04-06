import { Entity, getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { wp_posts } from '../entity/Product';

export class ProductController {
    static getAll = async (req: Request, res: Response) => {
        const productRepository = getRepository(wp_posts);
        let products:any;
    
        try {
            //find({ select: ['ID', 'guid','post_title', 'post_name'] });
          products = await productRepository.find({ select: ['ID', 'guid','post_title', 'post_name']});
          /*.createQueryBuilder('Product').
          select(['Product.ID','Product.post_title','Product.post_name']).
          where(['Product.post_type=product']);*/
        } catch (e) {
          res.status(404).json({ message: '¡¡Algo ha fallado!!' });
        }
    
        if (products.length > 0) {
          res.send(products);
        } else {
          res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
        }
      };
}

export default ProductController;