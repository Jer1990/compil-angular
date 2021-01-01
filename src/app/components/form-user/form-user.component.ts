import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      favoriteDrink: ['',Validators.required],
      hobbies: this.formBuilder.array([])
    })
  }

  onSubmitForm(){
    const formValue=this.userForm.value;
    const newUser = new UserModel(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['favoriteDrink'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users'])
  }

  getHobbies(){
    return this.userForm.get('hobbies') as FormArray
  }

  onAddHobby(){
    const newHobbyControl= this.formBuilder.control('', Validators.required)
    this.getHobbies().push(newHobbyControl);
  }

}
