import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class task {
  @PrimaryGeneratedColumn() 
  id: string;
  
  @Column({unique:true})
  name: string;

  @Column()
  work: string;

  @Column()
  address:string;
}