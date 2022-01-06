import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class promotions {

    @PrimaryColumn()
    promotion_id: number;
    
    @Column()
    description: string;

    @Column()
    is_qa: string;

    @Column()
    is_active: string;

    @Column()
    extra_config: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}