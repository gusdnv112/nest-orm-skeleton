import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache,Store } from 'cache-manager';


@Injectable()
export class SessionService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache){}

    async getTestSession(){
        console.log("Test Get session api");
        const test = await this.cacheManager.get('test');
        return test;
    }
    
    async setTestSession(key: string){
        console.log("Test Set session api");
        const foo = await this.cacheManager.set('foo',"bar",100);
        return foo;
    }

    async getSessionByKey(key: string) {
        const value = await this.cacheManager.get(key);
        return value;
    }

    async setSession(key: string){
        const upsertDt = {
            "date" : new Date()
        }
        const data = JSON.stringify(upsertDt);
        const test = await this.cacheManager.set(key,data);
        return test;
    }
}
