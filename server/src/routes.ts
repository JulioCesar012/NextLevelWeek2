import express, { request, response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnetionsController from './controllers/ConnetionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnetionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
