import { Request, Response } from "express";
import { ListOrderFinishedService } from "../../services/order/ListOrderFinishedService";

class ListOrderFinishedController {
    async handle(req: Request, res: Response) {
        const { date } = req.query;

        const listOrderCozinhaDateService = new ListOrderFinishedService();
        const orders = await listOrderCozinhaDateService.execute(date);

        return res.json(orders);
    }
}

export { ListOrderFinishedController };