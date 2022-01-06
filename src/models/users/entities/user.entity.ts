import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('user')
export class UserEntity extends BaseEntity{
    @PrimaryColumn()
    id: string;
  
    @Column({ length: 30 })
    firstName: string;
  
    @Column({ length: 60 })
    lastName: string;
  
    @Column()
    age: number;

}