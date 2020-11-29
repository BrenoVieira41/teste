import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService
    ) {}

    async findAllUsers() : Promise<User[]> {
      try {
      return await this.prisma.user.findMany()
      }catch (error) {
        return []
      }
    }

    async findUserById(id: number){
      const found = this.prisma.user.findOne({
        where: { id },
      })
      if (!found) {
        throw new NotFoundException(`Id não encontrado`)
      }
      
    }


    async createUser(data: CreateUserInput): Promise<User> {
      try {
      return this.prisma.user.create({
        data,
      })
      }catch (error) {
        throw new InternalServerErrorException('Problema para criar um usuário.')
      }
    }

    
}
