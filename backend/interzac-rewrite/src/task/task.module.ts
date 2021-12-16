import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { taskRepository } from './task.repository';
import { TaskService } from './task.service';

@Module({
  imports:[TypeOrmModule.forFeature([taskRepository])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
