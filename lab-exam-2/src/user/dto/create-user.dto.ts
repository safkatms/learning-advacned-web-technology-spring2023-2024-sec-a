import { IsNotEmpty, IsString, Length, IsEmail, Matches, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  @Matches(/^[a-zA-Z\s]+$/, { message: 'Full name must be alphabetic' })
  full_name: string;

  @IsNotEmpty()
  @Length(10, 50)
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @Length(3, 20)
  city: string;

  @IsString()
  @Length(3, 20)
  country: string;

  @IsString()
  @Length(3, 20)
  company_name: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(11, 15)
  phone_number: number;

  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, { message: 'Password must be alphanumeric and between 8 to 20 characters' })
  password: string;

  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
}
