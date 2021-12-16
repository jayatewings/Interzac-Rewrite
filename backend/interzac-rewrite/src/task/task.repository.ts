import { task } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(task)
export class taskRepository extends Repository<task> {}
