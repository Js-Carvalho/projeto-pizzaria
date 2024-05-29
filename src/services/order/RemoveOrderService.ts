import prismaClient from "../../prisma";

interface OrderRequest {
    id_pedido: string;
}

class RemoveOrderService {

    async execute({ id_pedido }: OrderRequest) {
        const order = await prismaClient.pedido.findUnique({
            where: {
                id: id_pedido
            }
        });

        if (!order) {
            return { message: 'Pedido não encontrado.' };
        }

        await prismaClient.pedido.delete({
            where: {
                id: id_pedido
            }
        });

        return order;
    }
}

export { RemoveOrderService }