import { getRepository, getConnection } from 'typeorm';
import { Request, Response } from 'express';
import { wp_posts } from '../entity/Product';
import { wp_postmeta } from '../entity/productDetail';
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
          from(viewProducts,"product").limit(100).getMany(); 
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
      const {Id} = req.params;
      const productRepository = getRepository(viewProducts);
      
      let products :viewProducts;

      products = await productRepository.createQueryBuilder().select(["product.ID","product.Articulo","product.Sku","product.Precio"
          ,"product.IVA","product.Stock","product.Imagen","product.Proveedor","product.Categoria","product.Subcategoria"]).
          from(viewProducts,"product").where("product.ID = :id",{id: Id}).getOne(); 
      
      products ? res.send(products) :  res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
      

/*       const { Id } = req.params;
      const productRepository = getRepository(wp_posts);
      try {
        const product = await productRepository.findOneOrFail(Id);
        res.send(product);
      } catch (e) {
        res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
      } */

    };

    static edit = async (req: Request, res: Response) => {
      let view:viewProducts;

      const { Id } = req.params;
      const {articulo, sku, precio, stock} = req.body;

      const viewRepository = getRepository(viewProducts);

      try {
        view = await viewRepository.findOneOrFail(Id);
      } catch (e) {
        res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
      }
 
      const validationOpt = { validationError: { target: false, value: false } };
      const errors = await validate(view, validationOpt) ;
  
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
   
      // Try to save producto
       try {
        //actualizo el título, tabla wp_post (principal).
        await getConnection().createQueryBuilder().update(wp_posts).set({post_title:articulo})
        .where("ID = :id",{id: Id}).execute();
        //actualizo el resto, tabla detalles.
        //Actualizamos SKU
        await getConnection().createQueryBuilder().update(wp_postmeta).set({meta_value: sku})
        .where("post_id = :id and meta_key = :type",{id: Id,type: '_sku'}).execute();
        //Actualizamos Precio
        await getConnection().createQueryBuilder().update(wp_postmeta).set({meta_value: precio})
        .where("post_id = :id and meta_key = :type",{id: Id,type: '_price'}).execute();
        //Actualizamos Stock
        await getConnection().createQueryBuilder().update(wp_postmeta).set({meta_value: stock})
        .where("post_id = :id and meta_key = :type",{id: Id,type: '_stock'}).execute();

      } catch (e) {
        return res.status(409).json({ message: 'Error guardando el artículo.' });
      }
   
      res.status(201).json({ message: 'Cambios guardados.' });
  
    };

}

export default ProductController;