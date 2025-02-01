import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: false,

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
  customers: any[] = [];
  constructor(private http :HttpClient) {
     }
     ngOnInit() {
       this.http.get("http://localhost:8888/customer-service/api/customers")
         .subscribe({
           next: (data: any) => {
             console.log(data);  // Affiche les données pour vérification
             if (data?._embedded?.customers) {
               this.customers = data._embedded.customers;  // Accède à la liste des clients
             } else {
               console.error('Aucun client trouvé ou format inattendu');
             }
           },
           error : err => {
             console.log(err)
           }
         })
     }
}
