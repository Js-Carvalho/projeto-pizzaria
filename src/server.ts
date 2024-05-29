import express, { Request, Response, NextFunction, Router } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { router } from './routes';

const app = express();
app.listen(3333, () => console.log('Servidor OK'));

app.use(express.json());
app.use(cors());

app.use(router);

// Middleware para tratamento de erros nas rotas
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    });
});

// definindo pra onde vai a imagem
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.listen(7000, () => console.log(('SERVIDOR ON')));
