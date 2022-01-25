import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContClientService } from 'src/app/services/cont-client.service';
import { DataService } from 'src/app/services/data.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cont-client',
  templateUrl: './cont-client.component.html',
  styleUrls: ['./cont-client.component.scss']
})
export class ContClientComponent implements OnInit, OnDestroy {

  panelOpenState = false;
  public subscription: Subscription;
  public loggedUser;
  public displayedColumns = ['id', 'data', 'valoare'];
  public comenzi = [];
  public client = [];

  public feedbackForm: FormGroup = new FormGroup(
    {
      nume: new FormControl(''),
      prenume: new FormControl(''),
      mesaj: new FormControl('')
    });

    public telForm: FormGroup = new FormGroup(
      {
        telefon: new FormControl('')
        
      });

  constructor(
    private router: Router,
    private dataService: DataService,
    private contClientService: ContClientService
  ) { }

  //getters
  get nume(): AbstractControl {
    return this.feedbackForm;
  }
  get prenume(): AbstractControl {
    return this.feedbackForm;
  }
  get mesaj(): AbstractControl {
    return this.feedbackForm;
  }

  get telefon(): AbstractControl {
    return this.telForm;
  }

  ngOnInit() {
    this.subscription = this.dataService.currentUser.subscribe( user => this.loggedUser = user);
    var logUser = localStorage.getItem('User');
    this.getComenzi(logUser);
    this.getClient(logUser);
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }



  public logout(): void{
    localStorage.setItem('Role','Anonim');
    this.router.navigate(['/login'])
  }


  public getComenzi(mail): void {

    this.contClientService.getComenzi(mail).subscribe(
      (result) => {
        console.log(result);
        this.comenzi = result;    
         
        
      },
      (error) => {
        console.log(error);
      }
  
     );
  }

  public trimite(): void {
    console.log(this.feedbackForm.value);
  }

  public getClient(mail): void {

    this.contClientService.getClient(mail).subscribe(
      (result) => {
        console.log(result);
        this.client = result;   
        
        const id = result.idClient;
        const nume = result.nume;
        const prenume = result.prenume;
        const telefon = result.telefon;
        const mail = result.mail;
        
        
         localStorage.setItem('IdUser',id);

         const p = document.createElement("p");
         p.innerHTML = "Nume:  " + nume + "; Prenume:  " + prenume;               
                  
         document.getElementById("datele-mele").appendChild(p);

         const p1 = document.createElement("p");
         p1.innerHTML = "Telefon:  " + telefon + "; Email:  " + mail;               
                 
         document.getElementById("datele-mele").appendChild(p1);
        
        
      },
      (error) => {
        console.log(error);
      }
  
     );
  }
  public update(): void {
   var user = localStorage.getItem('IdUser');
   var tel = this.telForm.controls['telefon'].value;
   console.log(tel);
   console.log(user);
   this.updateTel(user,tel);
    }

  public updateTel(user,tel): void {
    
    this.contClientService.updateTel(user,tel).subscribe(
      (result) => {
        console.log(result);
        
      },
      (error) => {
        console.log(error);
      }
  
     );
  }


}
