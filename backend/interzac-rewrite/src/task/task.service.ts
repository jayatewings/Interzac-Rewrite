import { taskRepository } from './task.repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(taskRepository)
        private taskRepository: taskRepository,
   
      ) {}
    async createtask(taskdto)
    {
        const{name,work,address}=taskdto;
    const storeTask=await this.taskRepository.save({name,work,address});
    console.log(storeTask,"storeTask");
    return storeTask;
    }

}
