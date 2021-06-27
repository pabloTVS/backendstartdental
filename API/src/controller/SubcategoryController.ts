import { getManager } from 'typeorm';
import { Request, Response } from 'express';

import { wp_terms } from '../entity/wpTerms';
import { wp_term_taxonomy } from '../entity/wpTermTaxonomy';

export class SubcategoryController{
    static getAllSubcategory = async (req: Request, res: Response) => {
        class Subcategories {
            term_id: number;
            name: string;
            slug: string;
            term_taxonomy_id:number;
            parent: number;
        }
        let subcategories: Subcategories[];

        subcategories = await getManager().createQueryBuilder(wp_terms,"ter")
        .select(["ter.term_id","ter.name","ter.slug"])
        .addSelect(["det.term_taxonomy_id","det.parent"])
        .innerJoin(wp_term_taxonomy,"det","det.term_id=ter.term_id and det.parent > 24")
        .getRawMany();
        subcategories ? res.send(subcategories) : res.status(404).json({ message: 'No se ha devuelto ningún valor.' });
      }
}
export default SubcategoryController;