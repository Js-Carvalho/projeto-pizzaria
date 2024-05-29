import { Request, Response } from "express";
import { ListOrderCozinhaDateService } from "../../services/order/ListOrderCozinhaDateService";

class ListOrderCozinhaDateController {
    async handle(req: Request, res: Response) {
        const { date } = req.query;

        const listOrderCozinhaDateService = new ListOrderCozinhaDateService();
        const orders = await listOrderCozinhaDateService.execute(date);

        return res.json(orders);
    }
}

export { ListOrderCozinhaDateController };