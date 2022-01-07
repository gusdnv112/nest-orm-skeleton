import * as config from "config";
import * as redisStore from 'cache-manager-redis-store';

class RedisProvider {
    
    private redisConfig: RedisConfig;

    constructor(){
        if(!config.has("redis")){
            throw new Error('redis config not exist');
        }
        console.log("before:", this.redisConfig)
        this.redisConfig = config.get<RedisConfig>('redis');

        console.log(this.redisConfig);
        
    }

    public getRedisOption(): RedisConfig{
        return this.redisConfig;
    }

}

export interface RedisConfig {
    store: redisStore;
    host: string;
    port: number;
    auth_pass: string;
  }

export const redisProvider = new RedisProvider();