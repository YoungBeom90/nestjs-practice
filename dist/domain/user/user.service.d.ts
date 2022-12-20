import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class CreateUserVo {
    id: string;
    name: string;
    birth: Date;
    phone: string;
    email: string;
}
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findOne(id: string): Promise<User>;
    find(): Promise<User[]>;
    createUser(vo: CreateUserVo): Promise<boolean>;
}
