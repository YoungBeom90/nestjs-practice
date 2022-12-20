import { UserService } from "./user.service";
export declare class CreateUserDto {
    id: string;
    name: string;
    birth: Date;
    phone: string;
    email: string;
}
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findOne(id: string): Promise<import("./user.entity").User>;
    find(): Promise<import("./user.entity").User[]>;
    createUser(dto: CreateUserDto): Promise<boolean>;
}
