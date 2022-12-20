"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../domain/user/user.entity");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.default = () => {
    const database = {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '011350',
        database: 'graphql_test',
        entities: [user_entity_1.User],
        synchronize: false,
        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        logging: ['query', 'info', 'error']
    };
    return {
        port: '3000',
        database
    };
};
//# sourceMappingURL=configuration.js.map