import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  standalone: false,

  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{
  products: any[] = [];
  constructor(private http:HttpClient) {
  }
   ngOnInit() {
    this.http.get("http://localhost:8888/inventory-service/api/products")
      .subscribe({
        next: (data: any) => {
          console.log(data);  // Affiche les données pour vérification
          if (data?._embedded?.products) {
            this.products = data._embedded.products;  // Accède à la liste des clients
          } else {
            console.error('Aucun client trouvé ou format inattendu');
          }
        },
        error:err => {
          console.log(err);
        }
      })
   }
}
