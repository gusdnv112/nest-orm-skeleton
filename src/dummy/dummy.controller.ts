import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { DummyService } from './dummy.service';

@Controller('dummy')
export class DummyController {
    constructor(private dummyService: DummyService) {}

    @Get() // http://localhost:3000/dummy  @GET
    getDummy(){
        return this.dummyService.getDummy();
    }

    @Get('id')  // http://localhost:3000/dummy?dummy=dummy @GET
    getDummyByQueryId(@Query('id') id){
        return id;
    }

    @Get(':id')  // http://localhost:3000/dummy/:id  @GET
    getDummyByParamId(@Param('id') id){
        return id;
    }

    @Post()     // http://localhost:3000/dummy  @POST
    @HttpCode(200)
    postDummy(@Body('name') name){
        return name;
    }

}
