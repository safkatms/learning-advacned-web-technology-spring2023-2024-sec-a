import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  company_name: string;

  @Column()
  phone_number: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column({ default: 'active' })
  user_type:string

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  date_added: Date;

  @Column({ default: null, nullable: true })
  last_updated: Date;
}
