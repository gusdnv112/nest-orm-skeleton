import { Body, Controller, Get, HttpCode, Param, Post, Query, Req } from '@nestjs/common';
import { Session } from 'inspector';
import { SessionDto } from './dto/session.dto';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
    constructor(private SessionService: SessionService) {}

    @Get() // http://localhost:3000/Session  @GET
    async getTestSession(){
        return await this.SessionService.getTestSession();
    }
    @Post('test')
    setTestSession(@Body() body: SessionDto){

        const key = body.id;
        return this.SessionService.setTestSession(key);
    }


    @Get('id')  // http://localhost:3000/Session?Session=Session @GET
    getSessionByKey(@Query('id') id){
        return this.SessionService.getSessionByKey(id);
    }

    @Get(':id')  // http://localhost:3000/Session/:id  @GET
    getSessionByParamId(@Param('id') id){
        return this.SessionService.getSessionByKey(id);
    }

    @Post()     // http://localhost:3000/Session  @POST
    @HttpCode(200)
    setSession(@Body() body: SessionDto){

        const key = body.id;
        return this.SessionService.setSession(key);
    }

}

