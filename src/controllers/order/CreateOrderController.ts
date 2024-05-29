import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {

    async handle(req: Request, res: Response) {
        const { mesa, nome } = req.body;

        const createOrderController = new CreateOrderService();

        const order = await createOrderController.execute({ mesa, nome });

        return res.json({ order });
    }
}

export { CreateOrderController }
