import { CacheModule, CACHE_MANAGER, MiddlewareConsumer, Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import * as redisStore from 'cache-manager-redis-store';
import { redisProvider } from 'src/providers/redis/redis';

@Module({
  imports: [
    // CacheModule.register({
    //   "store": redisStore,
    //   "host": "localhost",
    //   "port": 6379,
    //   "auth_pass": "0809",
    // })
    CacheModule.register(redisProvider.getRedisOption())
  ],
  controllers: [SessionController],
  providers: [SessionService],
  exports: [CacheModule]
})
export class SessionModule {
}
