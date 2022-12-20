import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UserService} from "./user.service";

export class CreateUserDto {
    id: string;
    name: string;
    birth: Date;
    phone: string;
    email: string;
}

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.userService.findOne(id);
    }

    @Get('all')
    async find() {
        return await this.userService.find();
    }

    @Post()
    async createUser(
        @Body() dto: CreateUserDto
    ) {
        return await this.userService.createUser(dto);
    }
}
