import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

interface OrderResponse {
    id: string;
    items?: {
        id: string;
        quantidade: number;
        produto: {
            id: string;
            nome: string;
            preco: number;
        };
    }[];
    total: number;
}

class CloseOrderCalcService {
    async execute({ order_id }: OrderRequest): Promise<OrderResponse> {
        // Buscar o pedido
        const order = await prismaClient.pedido.findFirst({
            where: { id: order_id },
        });

        if (!order) {
            throw new Error("Pedido não encontrado");
        }

        // Buscar os itens do pedido
        const items = await prismaClient.item.findMany({
            where: { id_pedido: order_id },
            include: { Produto: true },
        });

        // Calcular o total do pedido
        const total = items.reduce((acc, item) => {
            return acc + item.quantidade * Number(item.Produto.preco);
        }, 0);

        console.log(total);


        const itemsReturn = items.map((item) => ({
            id: item.id,
            quantidade: item.quantidade,
            produto: {
                id: item.Produto.id,
                nome: item.Produto.nome,
                preco: Number(item.Produto.preco),
            },
        }));

        return {
            id: order.id,
            items: itemsReturn,
            total,
        };
    }
}

export { CloseOrderCalcService };