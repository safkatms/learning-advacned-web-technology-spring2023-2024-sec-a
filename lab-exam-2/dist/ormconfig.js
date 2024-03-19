"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const user_entity_1 = require("./src/user/entities/user.entity");
exports.config = {
    type: 'postgres',
    database: 'labExam',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    entities: [user_entity_1.User],
    synchronize: true,
};
//# sourceMappingURL=ormconfig.js.map