import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('data')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  corner: string;

  @Column('double')
  long: number;

  @Column('double')
  lat: number;

 
}
