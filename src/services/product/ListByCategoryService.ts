import prismaClient from "../../prisma";

interface ProductRequest {
    categoriaId: string;
}

class ListByCategoryService {
    async execute({ categoriaId }: ProductRequest) {
        const product = await prismaClient.produto.findMany({
            where: {
                categoriaId: categoriaId
            }
        })

        return product;
    }
}

export { ListByCategoryService }