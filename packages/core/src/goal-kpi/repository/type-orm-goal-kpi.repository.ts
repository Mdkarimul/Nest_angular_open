import { Repository } from 'typeorm';
import { GoalKPI } from '../goal-kpi.entity';

export class TypeOrmGoalKpiRepository extends Repository<GoalKPI> { }
