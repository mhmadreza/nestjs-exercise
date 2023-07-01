import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { tasks } from './data/task';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {

    constructor(private prisma: PrismaService){}

    async createTask(data: CreateTaskDto){
        const createData = await this.prisma.tasks.create({
            data: data
        });
        return{
            statusCode: 200,
            data: createData,
        }
    }

    async getAllTask(){
        const dataTask = await this.prisma.tasks.findMany();
        return {
            statusCode: 200,
            data: dataTask,
        }
    }

    async getTaskById(task_id: number){
        const dataById = await this.prisma.tasks.findFirst({
            where: {
                id: task_id
            }
        })
        return{
            statusCode: 200,
            data: dataById,
        };
    }

    async updateTaskById(task_id: number, data:UpdateTaskDto){
        const updateDataById = await this.prisma.tasks.update({
            where: {
                id: task_id,
            },
            data: data,
        });
        return{
            statusCode: 200,
            data: updateDataById,
        };
    }

    async deleteTaskById(task_id: number){
        const deleteDataTaskById = await this.prisma.tasks.delete({
            where: {
                id: task_id,
            }
        });
        return{
            statusCode: 200,
            data: deleteDataTaskById,
            message: `Sukses delete Task data! ${{task_id}}`
        }
    }

}
