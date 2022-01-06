import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { promotionDto } from "./dto/promotion.dto";
import { promotions } from "./entities/promotion.entity";
import { PromotionRepository } from "./promotion.repository";

@Injectable()
export class PromotionService {

    constructor(
        private promotionRepository: PromotionRepository
        ) {}

    getPromotion(){
        return this.promotionRepository.find();
    }

    upsertPromotion(body: promotionDto) {
        const today = new Date();

        body.updated_at = today;

        const promotion = this.promotionRepository.findOne(body.promotion_id);
        if(!promotion){
            body.created_at = today;
        }
        return this.promotionRepository.save(body);
    }

    deletePromotion(param: number){
        return this.promotionRepository.delete(param);

    }
}