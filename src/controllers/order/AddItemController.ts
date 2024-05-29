import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {

    async handle(req: Request, res: Response) {
        const { quantidade, id_produto, id_pedido } = req.body;

        const addItem = new AddItemService();

        const order = await addItem.execute({
            quantidade,
            id_produto,
            id_pedido
        })

        return res.json(order);
    }
}

export { AddItemController }