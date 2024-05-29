import prismaClient from "../../prisma";

class ListOrderService {

    async execute() {
        const order = await prismaClient.pedido.findMany({
            select: {
                id: true,
            }
        })

        return order;
    }
}

export { ListOrderService }