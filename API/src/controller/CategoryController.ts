import { getRepository, getConnection } from 'typeorm';
import { Request, Response } from 'express';

import { wp_terms } from '../entity/wpTerms';

export class CategoryController{
    static getAllCategory = async (req: Request, res: Response) => {
        const supRepository = getRepository(wp_terms);
        let suppliers: wp_terms[];

        suppliers = await supRepository.createQueryBuilder().select(["sup.term_id","sup.name","sup.slug"]).
        from(wp_terms,"sup").
        where("sup.term_id IN (select term_id FROM wp_term_taxonomy WHERE parent = 24)")
        .getMany();
  
        suppliers ? res.send(suppliers) : res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
      }
}
export default CategoryController;