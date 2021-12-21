import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyService {

    getDummy(): string{
        return "hello Dummy";
    }
}
