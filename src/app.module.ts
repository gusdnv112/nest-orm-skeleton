import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DummyController } from './dummy/dummy.controller';
import { DummyModule } from './dummy/dummy.module';
import { DummyService } from './dummy/dummy.service';

@Module({
  imports: [DummyModule, TypeOrmModule.forRoot()],
  controllers: [DummyController],
  providers: [DummyService],
})
export class AppModule {}
