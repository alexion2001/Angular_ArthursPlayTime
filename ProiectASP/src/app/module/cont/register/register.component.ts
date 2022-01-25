import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  public registerForm: FormGroup = new FormGroup(
    {
      nume: new FormControl(''),
      prenume: new FormControl(''),
      telefon: new FormControl(''),
      email: new FormControl(''),
      rol: new FormControl('Client'),
      password: new FormControl('')
    });

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) { }

  //getters
  get email(): AbstractControl {
    return this.registerForm;
  }
  get password(): AbstractControl {
    return this.registerForm;
  }

  ngOnInit(): void {
  }

  public addClient(client): void{
    this.registerService.addClient(client).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(this.registerForm.value);
    this.router.navigate(['/login'])
  }


  public register(): void{

        var rol = this.registerForm.controls['rol'].value;
        var nume = this.registerForm.controls['nume'].value;
        var prenume = this.registerForm.controls['prenume'].value;
        var tel = this.registerForm.controls['telefon'].value;
        var mail = this.registerForm.controls['email'].value;
        var pass = this.registerForm.controls['password'].value;

        var reg = 
        {
          "nume": nume,
          "prenume":prenume,
          "telefon": tel,
          "email": mail,
          "rol": rol,
          "password": pass
        }

    if (rol === 'Client'){
          
      var client =
    {
      "nume": nume,
      "prenume": prenume,
      "telefon": tel,
      "mail": mail
    };
    console.log(client);
    this.addClient(client);

    this.registerService.addRegister(reg).subscribe(
       (result) => { 
         console.log(result); 
        }, 
        (error) =>
         { 
           console.log(error); 
         } );
  }
  else{
    //aici in else faci un get dupa nr tel sau nume sau ce vrei tu in tabel angajati si daca gaseste de abia atunci faci register-ul

    this.registerService.addRegister(reg).subscribe(
      (result) => { 
        console.log(result); 
       }, 
       (error) =>
        { 
          console.log(error); 
        } );
  }

    this.router.navigate(['/login'])
  }

 

}
