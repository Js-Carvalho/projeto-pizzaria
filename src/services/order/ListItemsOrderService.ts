import prismaClient from "../../prisma";

class ListItemsOrderService {
    async execute(orderId) {
        const orderItems = await prismaClient.item.findMany({
            where: {
                id_pedido: orderId
            },
            select: {
                id: true,
                id_pedido: true
            }
        });

        return orderItems;
    }
}

export { ListItemsOrderService };