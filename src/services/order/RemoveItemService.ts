import prismaClient from "../../prisma";

interface OrderRequest {
    id_item: string;
}

class RemoveItemService {

    async execute({ id_item }: OrderRequest) {
        const existingItem = await prismaClient.item.findUnique({
            where: {
                id: id_item
            }
        });

        if (!existingItem) {
            throw new Error('O item não foi encontrado.'); // Lança um erro se o item não existir
        }

        const itemDelete = await prismaClient.item.delete({
            where: {
                id: id_item
            }
        });

        return itemDelete;
    }
}

export { RemoveItemService }