import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LogInDto } from './dto/login-dto';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<void>;
    findByEmail(email: string): Promise<User | undefined>;
    validateUser(email: string, pass: string): Promise<any>;
    login(loginDto: LogInDto): Promise<{
        message: string;
    }>;
}
