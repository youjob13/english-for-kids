import { Router } from 'express';
import { getStatistics, updateStatistics, resetStatistics } from './statisticsControl';

const statisticsRouter = Router();

statisticsRouter.get('/', getStatistics);
statisticsRouter.put('/', updateStatistics);
statisticsRouter.delete('/', resetStatistics);

export default statisticsRouter;
