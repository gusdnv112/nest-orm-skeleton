import { Body, Controller, Get, Post } from "@nestjs/common";
import { PromotionService } from "./promotion.service";

@Controller('promotion')
export class PromotionController{
    constructor(private promotionService: PromotionService){}

    @Get()
    getPromotion(){
        return this.promotionService.getPromotion();
    }
    
    @Post()
    insertPromotion(@Body('prmotion') body :object){
        return this.promotionService.insertPromotion(body);
    }
}