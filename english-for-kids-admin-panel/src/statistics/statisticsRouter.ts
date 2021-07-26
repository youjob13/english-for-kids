import { Router } from 'express';
import { getStatistics, updateStatistics } from './statisticsControl';

const statisticsRouter = Router();

statisticsRouter.get('/', getStatistics);
statisticsRouter.put('/', updateStatistics);

export default statisticsRouter;
