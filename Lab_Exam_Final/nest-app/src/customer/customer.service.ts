import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({where:{id:id}});
  }

  async update(id: number, updateCustomerDto: UpdateUserDto): Promise<User> {
    const customer = await this.userRepository.findOne({where:{id:id}});
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    Object.assign(customer, updateCustomerDto);
    return this.userRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
  
}
