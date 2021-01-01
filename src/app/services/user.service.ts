import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';

@Injectable()
export class UserService {
    private users:UserModel[]=[
        {
            firstName:'John',
            lastName:'doe',
            email:'john@Doe.com',
            favoriteDrink:'cola',
            hobbies:['gratter les couilles','apero']
        }
    ];
    userSubject = new Subject<UserModel[]>();

constructor() { }

emitUsers(){
    this.userSubject.next(this.users.slice());
}

addUser(user:UserModel){
    this.users.push(user);
    this.emitUsers();
}

}
