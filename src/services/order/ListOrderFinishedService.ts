import prismaClient from "../../prisma";

class ListOrderFinishedService {
    async execute(date) {
        const pedidos = await prismaClient.pedido.findMany({
            where: {
                status: true,
                rascunho: false,
                atualizado_em: {
                    gte: new Date(date),
                }
            },
            select: {
                id: true,
                mesa: true,
                status: true,
                rascunho: true,
                nome: true,
                criado_em: true,
                atualizado_em: true,
            }
        });

        return pedidos;
    }
}

export { ListOrderFinishedService };