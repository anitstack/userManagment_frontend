import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  private userRegistration: any = {};

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  public registration(){
    this.registerUser(this.userRegistration);
  }
  
  public registerUser(userRegistration){
    console.log('-------------user data----', userRegistration);
    this.registerService.registerUser(userRegistration).subscribe(
      success=>{
        console.log('------------register successfully---');
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      }, error => {
        console.log('-----------user not registered---error-----');
        this.userRegistration={};
      });
  }

}
