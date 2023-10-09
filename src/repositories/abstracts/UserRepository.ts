import { IUser } from 'src/models/IUser';
import { CreateUserDTO } from 'src/modules/user/use-cases/create-user/dtos/CreateUserDTO';

export abstract class UserRepository {
    abstract create(data: CreateUserDTO): Promise<IUser>;
    abstract findById(id: string): Promise<IUser>;
    abstract findByName(name: string): Promise<IUser>;
    abstract findByEmail(email: string): Promise<IUser>;
}
