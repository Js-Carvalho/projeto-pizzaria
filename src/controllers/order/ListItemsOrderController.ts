import { Request, Response } from "express";
import { ListItemsOrderService } from "../../services/order/ListItemsOrderService";

class ListItemsOrderController {
    async handle(req: Request, res: Response) {
        try {
            const { orderId } = req.params;

            const listItemsOrderService = new ListItemsOrderService();
            const orderItems = await listItemsOrderService.execute(orderId);

            return res.json(orderItems);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao listar itens do pedido informado!" });
        }
    }
}

export { ListItemsOrderController };