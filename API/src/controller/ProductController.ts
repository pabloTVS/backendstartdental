import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
//import { wp_posts } from '../entity/Product';
import { viewProducts } from '../entity/viewProducts'

export class ProductController {
    static getAllProducts = async (req: Request, res: Response) => 
    {
      const productRepository = getRepository(viewProducts);
      let type:any;
      let products:any;
      
      try {
          products = await productRepository.createQueryBuilder().select(["product.ID","product.Articulo","product.Sku","product.Precio"
          ,"product.IVA","product.Stock","product.Imagen","product.Proveedor","product.Categoria","product.Subcategoria"]).
          from(viewProducts,"product").limit(100).getMany(); 
          products.length ? res.send(products) :  res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
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
}

export default ProductController;