import { Router } from 'express';
import { getStatistics, updateStatistics, resetStatistics } from './statisticsControl';
import { RouterPath } from '../shared/globalVariables';

const statisticsRouter = Router();

statisticsRouter.get(RouterPath.ROOT, getStatistics);
statisticsRouter.put(RouterPath.ROOT, updateStatistics);
statisticsRouter.delete(RouterPath.ROOT, resetStatistics);

export default statisticsRouter;
