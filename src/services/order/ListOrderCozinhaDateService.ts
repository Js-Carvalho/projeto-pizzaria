import prismaClient from "../../prisma";

class ListOrderCozinhaDateService {
    async execute(date) {
        const pedidos = await prismaClient.pedido.findMany({
            where: {
                status: false,
                rascunho: false,
                criado_em: {
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

export { ListOrderCozinhaDateService };