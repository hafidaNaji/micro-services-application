import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-billing',
  standalone: false,

  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit {
  bills: any[] = [];
  facture: any; // Facture sélectionnée (déclaration explicite)
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8888/billing-service/api/bills")
      .subscribe({
        next: (data: any) => {
          console.log(data);  // Affiche les données pour vérification
          if (data?._embedded?.bills) {
            this.bills = data._embedded.bills;  // Accède à la liste des clients
          } else {
            console.error('Aucun client trouvé ou format inattendu');
          }
        },
        error: err => {
          console.log(err)
        }
      })
  }

  // Méthode pour afficher la facture par ID
  display(b: any) {

  }
}
