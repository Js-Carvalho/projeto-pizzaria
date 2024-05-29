import prismaClient from "../../prisma";

interface ProductRequest {
    nome: string;
    preco: string;
    descricao: string;
    banner: string;
    categoriaId: string;
}

class CreateProductService {
    async execute({ nome, preco, descricao, banner, categoriaId }: ProductRequest) {

        const product = await prismaClient.produto.create({
            data: {
                nome: nome,
                preco: preco,
                descricao: descricao,
                banner: banner,
                categoriaId: categoriaId,
            }
        })

        return product;
    }
}

export { CreateProductService }