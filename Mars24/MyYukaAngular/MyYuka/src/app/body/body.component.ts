import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})


export class BodyComponent {


  public produit = new FormControl('');
  private configUrl = 'https://world.openfoodfacts.org/api/v2/product/'
  public nom: any;
  public codeBarre: any;
  public marque: any;
  public ingredients: any;
  public photo: any;
  public allergenes: any;
  public emballage: any;
  public nova: any;
  public nutriscore: any;
  public nutriImage: any;
  public distributeur: any;
  public fabricant: any;
  public pays: any;
  public palme: any;

  constructor(private http: HttpClient) {
  }


  afficherValeur() {
    return this.http.get(this.configUrl + this.produit.value)
      .subscribe((data: any) => {
        console.log(data);
        this.nom = data.product.product_name;
        this.codeBarre = data.code;
        this.marque = data.product.brands;
        this.ingredients = data.product.ingredients_text;
        this.photo = data.product.image_front_small_url;
        this.allergenes = data.product.allergens;
        this.emballage = data.product.packaging_old_before_taxonomization;
        this.nova = data.product.nova_group;
        this.nutriscore = data.product.nutriscore_2023_tags[0];
        this.nutriImage = data.product.image_nutrition_url;
        this.distributeur = data.product.stores;
        this.fabricant = data.product.countries_imported;
        this.pays = data.product.countries;
        const element = data.product.ingredients.find(
          (element: { id: string }) => element.id === 'en:palm-oil'
        );
        this.palme = element ? 'Présente' : 'Non présente';
      });
  }
}

