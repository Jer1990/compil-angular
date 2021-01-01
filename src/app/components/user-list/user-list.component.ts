import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users:UserModel[];
  userSubscription : Subscription;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe((users:UserModel[])=>{
      this.users=users;
    })
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

  
}
