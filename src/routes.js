import {
  Router
} from 'express';

import VotacoesController from './app/controllers/VotacoesController';

const routes = new Router();

routes.get('/votacoes', VotacoesController.index);


export default routes;