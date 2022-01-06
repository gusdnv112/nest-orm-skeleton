import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DummyController } from './models/dummy/dummy.controller';
import { dummy2Middleware } from './models/dummy/dummy.middleware';
import { DummyModule } from './models/dummy/dummy.module';
import { DummyService } from './models/dummy/dummy.service';
import { PromotionController } from './models/promotion/promotion.controller';
import { PromotionModule } from './models/promotion/promotion.module';
import { PromotionRepository } from './models/promotion/promotion.repository';
import { PromotionService } from './models/promotion/promotion.service';
import { UserController } from './models/users/user.controller';
import { UserModule } from './models/users/user.module';
import { UserService } from './models/users/user.service';

@Module({
  imports: [
    PromotionModule,
    UserModule,
    DummyModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [UserController, DummyController, PromotionController],
  providers: [UserService, DummyService, PromotionService],
})
export class AppModule{
}
