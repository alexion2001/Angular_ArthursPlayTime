import { Component, OnInit } from '@angular/core';
import { ContClientService } from 'src/app/services/cont-client.service';

@Component({
  selector: 'app-cos-cumparaturi',
  templateUrl: './cos-cumparaturi.component.html',
  styleUrls: ['./cos-cumparaturi.component.scss']
})
export class CosCumparaturiComponent implements OnInit {

  public listaProduse = localStorage.getItem("Cumparaturi");
  public cumpar = JSON.parse(this.listaProduse);
  public displayedColumns = ['id', 'nume', 'pret', 'delete'];

  constructor(
  private contClientService: ContClientService,
  ) { }

  ngOnInit(): void {
    
    
  }
  public sterg(poz): void{
    console.log('am sters');
    this.cumpar.splice(poz, 1);
    localStorage.setItem("Cumparaturi", JSON.stringify(this.cumpar)); 
  }

  public addComanda(comanda): void {

    this.contClientService.putComanda(comanda).subscribe(
      (result) => {
        localStorage.setItem("IdComandaNoua", JSON.stringify(result));
        
      },
      (error) => {
        console.log(error);
      }
  
     );
  }

  public addDetalii(comanda): void {

    this.contClientService.putDetalii(comanda).subscribe(
      (result) => {
        console.log(result);

        
      },
      (error) => {
        console.log(error);
      }
  
     );
  }

  public plasez(): void{
    let today = new Date().toISOString().slice(0, 10)
    var suma = 0;
    var client = localStorage.getItem("IdUser");

    for(var i = 0;i<this.cumpar.length;i++)
      suma = suma + this.cumpar[i].pret;

      console.log(suma);
     var comanda =     
{
  "data": today,
  "valoare": suma,
  "statusTotal": "nepreluat",
  "idClient": client
}
console.log(comanda);
     
      this.addComanda(comanda);
      var comanda_pusa = JSON.parse(localStorage.getItem("IdComandaNoua"));
      var cod = comanda_pusa.idComanda;
      console.log(cod);

      for(var i = 0;i<this.cumpar.length;i++)
      {var com = {
        "IdComanda" : cod,
        "IdProdus" :this.cumpar[i].ProdusId,
        "IdProiectant": 1,
        "IdExecutant":2,
        "Status": "nepreluat"

      }
        this.addDetalii(com);
    }

  }

  
}
