import { Request, Response } from "express";
import { FinishedOrderService } from "../../services/order/FinishedOrderService";

class FinishedOrderController {

    async handle(req: Request, res: Response) {

        const { order_id } = req.body;

        const sendOrderService = new FinishedOrderService();

        const order = await sendOrderService.execute({ order_id });

        return res.json(order);
    }
}

export { FinishedOrderController }