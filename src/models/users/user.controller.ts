import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get()
    getAllUser(){
        return this.userService.getAllUser();
    }

    @Get(':id')
    getUser(@Param('id') id){
        return this.userService.getUser(id);
    }

    @Get('/first/:firstName')
    getUserByFirst(@Param('firstName') name){
        return this.userService.getUserByFirst(name);
    }

    @Get('/last/:lastName')
    getUserByLast(@Param('lastName') name){
        return this.userService.getUserByLast(name);
    }
}