import { Injectable } from '@nestjs/common';
import { IUser } from 'src/models/IUser';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { PrismaService } from '../prisma-client.service';
import { CreateUserDTO } from 'src/modules/user/use-cases/create-user/dtos/CreateUserDTO';

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(data: CreateUserDTO): Promise<IUser> {
        const createUser = await this.prismaService.user.create({ data });

        return createUser;
    }

    async findByEmail(email: string): Promise<IUser> {
        const findByEmail = await this.prismaService.user.findUnique({
            where: { email },
        });

        return findByEmail;
    }

    async findById(id: string): Promise<IUser> {
        const findById = await this.prismaService.user.findUnique({
            where: { id },
        });

        return findById;
    }

    async findByName(name: string): Promise<IUser> {
        const findByName = await this.prismaService.user.findUnique({
            where: { name },
        });

        return findByName;
    }
}
