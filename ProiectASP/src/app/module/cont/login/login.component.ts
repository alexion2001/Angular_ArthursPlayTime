import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  

  public loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl('')
    });

  constructor(
    private router: Router,
    private dataService: DataService,
    private loginService: LoginService
    ) { }

    //getters
    get email(): AbstractControl {
      return this.loginForm;
    }
    get password(): AbstractControl {
      return this.loginForm;
    }

  ngOnInit(): void {
   
  }

  public logout(): void{
    localStorage.setItem('Role','Anonim');
    localStorage.setItem("Cumparaturi", ""); 
  }

  public login(): void {
    console.log(this.loginForm.value);
    this.loginService.addLogin(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );

    this.dataService.changeUserData(this.loginForm.value);
    localStorage.setItem('Role','Client');
    var user = this.loginForm.controls['email'].value;
    localStorage.setItem('User',user);
    this.router.navigate(['/cont'])
    
  }
  



}
