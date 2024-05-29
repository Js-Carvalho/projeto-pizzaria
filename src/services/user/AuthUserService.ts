import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    senha: string;
}

class AuthUserService {
    async execute({email, senha}: AuthRequest) {

        const user = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if(!user) {
            throw new Error("Usuario ou senha incorretos");
        }

        const senhaMatch = await compare(senha, user.senha);

        if(!senhaMatch) {
            throw new Error("Usuario ou senha incorretos");
        }

        // gerar um token JWT para o usuario
        const token = sign ({
            nome: user.nome,
            usuario: user.email
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d'
        }
        )

        return{
            id: user.id,
            nome: user.nome,
            usuario: user.email,
            token: token
        }
        
        /* return{ok:true} */
    }
}

export{AuthUserService};