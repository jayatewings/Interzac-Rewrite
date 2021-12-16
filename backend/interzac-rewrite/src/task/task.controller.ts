import { TaskDto } from './../task.dto.ts/task.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}


@Post()
async createTask(@Body() taskdto:TaskDto)
{
    return await this.taskService.createtask(taskdto);
}
}
