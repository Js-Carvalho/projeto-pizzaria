import { Router } from "express";
import multer from "multer";

// Chamada de arquivo de config de pasta e Definição de Pasta
import uploadConfig from "./config/multer";

/* Área de importação dos controllers */
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailuserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { ListOrderCozinhaDateController } from "./controllers/order/ListOrderCozinhaDateController";
import { ListOrderFinishedController } from "./controllers/order/ListOrderFinishedController";
import { FinishedOrderController } from "./controllers/order/FinishedOrderController";
import { CloseOrderCalcController } from "./controllers/order/CloseOrderCalcController";

import { ListOrderController } from "./controllers/order/ListOrderController";
import { ListItemsOrderController } from "./controllers/order/ListItemsOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/deleteorder', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.delete('/item/order/delete', isAuthenticated, new RemoveItemController().handle);
router.get('/list/order/cozinha', isAuthenticated, new ListOrderCozinhaDateController().handle);
router.get('/list/order/finished', isAuthenticated, new ListOrderFinishedController().handle);
router.put('/order/finished', isAuthenticated, new FinishedOrderController().handle);
router.get('/close/order/calc', isAuthenticated, new CloseOrderCalcController().handle);

router.get('/listorder', isAuthenticated, new ListOrderController().handle);
router.get('/listitemsorder', isAuthenticated, new ListItemsOrderController().handle);

/* router.get('/teste', (request, response) => {
    return response.json({nome: 'eduardo'});
})
 */

/* router.get('/teste', (request, response) => {
    throw new Error('Error ao fazer requisição');
})
 */

/* router.get('/teste', (request, response) => {
    return response.json({nome: 'Joas'});
}) */

export { router };