import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { promotionDto } from "./dto/promotion.dto";
import { PromotionService } from "./promotion.service";

@Controller('promotion')
export class PromotionController{
    constructor(private promotionService: PromotionService){}

    @Get()
    getPromotion(){
        return this.promotionService.getPromotion();
    }
    
    @Post()
    upsertPromotion(@Body('promotion') body :promotionDto){
        return this.promotionService.upsertPromotion(body);
    }

    @Delete(':id')
    deletePromotion(@Param('id') promotion_id: number){
        return this.promotionService.deletePromotion(promotion_id);
    }
}