import { IsNotEmpty, IsString, Length, IsEmail, Matches, IsNumber } from 'class-validator';

export class LogInDto {
  @IsNotEmpty()
  @Length(10, 50)
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, { message: 'Password must be alphanumeric and between 8 to 20 characters' })
  password: string;

}
