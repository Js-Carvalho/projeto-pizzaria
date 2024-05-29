import { Request, Response } from "express";
import { CloseOrderCalcService } from "../../services/order/CloseOrderCalcService";

class CloseOrderCalcController {
    async handle(request: Request, response: Response) {
        const { order_id } = request.params;

        const finishOrderService = new CloseOrderCalcService();
        const orderData = await finishOrderService.execute({ order_id });

        return response.json(orderData);
    }
}

export { CloseOrderCalcController }