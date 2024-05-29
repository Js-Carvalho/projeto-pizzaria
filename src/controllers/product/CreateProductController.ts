import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {

    async handle(req: Request, res: Response) {
        const { nome, preco, descricao, banner, categoriaId } = req.body;

        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("Erro no Upload da imagem!")
        }
        else {
            const { originalname, filename: banner } = req.file;

            const produtc = await createProductService.execute({
                nome,
                preco,
                descricao,
                banner,
                categoriaId,
            })

            return res.json(produtc);
        }
    }
}

export { CreateProductController }