import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-signup',
  imports: [MatCardModule,MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true
})
export class SignupComponent {

  constructor(private userService: UserService){}

  public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };

  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user);
    if(this.user.username == ''||this.user.username==null){
      Swal.fire('Warning', 'Username is registered','warning')
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Success', 'User is registered','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error', 'User is not registered','error');
      }
    )
  }

}
