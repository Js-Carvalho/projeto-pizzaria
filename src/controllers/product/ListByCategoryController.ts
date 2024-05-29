import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {

    async handle(req: Request, res: Response) {
        const categoriaId = req.query.categoriaId as string;

        const listByCategory = new ListByCategoryService();

        const product = await listByCategory.execute({
            categoriaId
        });

        return res.json(product);
    }
}

export { ListByCategoryController }