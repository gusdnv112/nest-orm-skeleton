import { EntityRepository, Repository } from "typeorm";
import { promotions } from "./entities/promotion.entity";

@EntityRepository(promotions)
export class PromotionRepository extends Repository<promotions>{
    
    async createById(promotion_id: number){
        const promotions = this.create({promotion_id});
        return this.save(promotions);
    }

    

}