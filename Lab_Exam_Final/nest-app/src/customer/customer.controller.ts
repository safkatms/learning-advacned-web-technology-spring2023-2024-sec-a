import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService,
    private userService: UserService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.registerUser(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.customerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateUserDto): Promise<User> {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.customerService.remove(+id);
  }
}
