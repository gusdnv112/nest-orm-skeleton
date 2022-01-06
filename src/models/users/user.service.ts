import { Injectable } from "@nestjs/common";
import { UserEntity as User } from './entities/user.entity';


@Injectable()
export class UserService{


    getAllUser(): object{
        return User.find();
    }

    getUser(id: number): object{
        return User.findOne(id);
    }

    getUserByFirst(name: string): object{
        return User.find({ firstName: name});
    }

    getUserByLast(name: string): object{
        return User.findOne({ lastName : name});
    }
}