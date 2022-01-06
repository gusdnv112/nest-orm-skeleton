import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { dummy2Middleware } from './dummy.middleware';
import { DummyService } from './dummy.service';

@Module({
  controllers: [DummyController],
  providers: [DummyService],
})
export class DummyModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any{
    consumer.apply(dummy2Middleware).forRoutes(DummyController);
  }}
