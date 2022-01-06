import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { promotions } from "./entities/promotion.entity";
import { PromotionRepository } from "./promotion.repository";

@Injectable()
export class PromotionService {

    constructor(
        private promotionRepository: PromotionRepository
        ) {        }

    getPromotion(){
        return this.promotionRepository.find();
    }

    insertPromotion(promotinon) {
        const today = new Date();

        const promotions = { promotinon, today}
        console.log(promotions);

        return this.promotionRepository.save(promotinon);
    }
}