import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { wp_posts } from '../entity/Product';
import { viewProducts } from '../entity/viewProducts'
import { validate } from 'class-validator';

export class ProductController {
    static getAllProducts = async (req: Request, res: Response) => 
    {
      const productRepository = getRepository(viewProducts);
      
      let products:any;
      
      try {
          products = await productRepository.createQueryBuilder().select(["product.ID","product.Articulo","product.Sku","product.Precio"
          ,"product.IVA","product.Stock","product.Imagen","product.Proveedor","product.Categoria","product.Subcategoria"]).
          from(viewProducts,"product").limit(9000).getMany(); 
          products ? res.send(products) :  res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
        }  
        catch (e) {
          res.status(400).json({message: e.message })
        }

     /* const productRepository = getRepository(wp_posts);
      let type:any;
      let products:any;
      
      try {
          products = await productRepository.createQueryBuilder().
          select(["product.ID","product.post_date","product.post_title","product.post_name","product.guid"]).
          from(wp_posts,"product").where("product.post_type = :type",{type: 'product'}).limit(5).getMany(); 

          products.length ? res.send(products) :  res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
        }  
        catch (e) {
          res.status(400).json({message: '¡¡Algo ha fallado!!'})
        }*/
    };

    static getById = async (req: Request, res: Response) => {
      const { Id } = req.params;
      const productRepository = getRepository(wp_posts);
      try {
        const product = await productRepository.findOneOrFail(Id);
        res.send(product);
      } catch (e) {
        res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
      }
    };

    static edit = async (req: Request, res: Response) => {
      let product:wp_posts;
      const { Id } = req.params;
      const {post_title} = req.body;
      const productRepository = getRepository(wp_posts);
      try {
        product = await productRepository.findOneOrFail(Id);
        product.post_title = post_title;
      } catch (e) {
        res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
      }

      const validationOpt = { validationError: { target: false, value: false } };
      const errors = await validate(product, validationOpt);
  
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
  
      // Try to save user
       try {
        await productRepository.save(product);
      } catch (e) {
        return res.status(409).json({ message: 'Error guardando el artículo.' });
      }
   
      res.status(201).json({ message: 'Cambios guardados.' });
  
    };

}

export default ProductController;