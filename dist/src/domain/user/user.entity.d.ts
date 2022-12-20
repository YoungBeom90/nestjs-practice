import { CreateUserVo } from "./user.service";
export declare class User {
    id: string;
    name: string;
    birth: Date;
    phone: string;
    email: string;
    createdAt: Date;
    createdBy: string;
    static create(vo: CreateUserVo): User;
}
