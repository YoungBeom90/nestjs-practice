import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {User} from "../domain/user/user.entity";
import {SnakeNamingStrategy} from "typeorm-naming-strategies";

export default () => {
    const database: TypeOrmModuleOptions = {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '011350',
        database: 'graphql_test',
        entities: [User],
        synchronize: false,
        namingStrategy: new SnakeNamingStrategy(),
        logging: ['query', 'info', 'error']
    }

    return {
        port: '3000',
        database
    }
}
