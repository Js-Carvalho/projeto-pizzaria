import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {

    async handle(req: Request, res: Response) {
        try {
            const id_item = req.query.id_item as string;

            const removeItemService = new RemoveItemService();

            const item = await removeItemService.execute({ id_item });

            return res.json(item);
        } catch (error) {
            // Trate o erro aqui ou envie uma resposta de erro adequada
            return res.status(500).json({ error: 'Erro ao remover o item. ' + error.message });
        }
    }
}

export { RemoveItemController }