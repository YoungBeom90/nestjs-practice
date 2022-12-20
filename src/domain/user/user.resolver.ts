import {Args, Int, Query, Resolver} from "@nestjs/graphql";
import {User} from "./user.entity";
import {UserService} from "./user.service";

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) {}

    @Query(() => User, { name: 'getUserByUserId' })
    async getUserByUserId(@Args('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }
}
