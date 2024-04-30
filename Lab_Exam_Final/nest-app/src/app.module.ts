import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'ormconfig';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot(config), AuthModule, ProductModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
