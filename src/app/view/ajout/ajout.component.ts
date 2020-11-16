import { Component, OnInit } from '@angular/core';
import {Magasin} from "../../models/Magasin";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AjoutService} from "../../service/ajout.service";
import {Categorie} from "../../models/Categorie";

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  name:string;
  showm:boolean;
  showp:boolean;
  showc:boolean;
  magasin:Magasin;
  magasinForm: FormGroup;
  categorie:Categorie;
  categorieForm: FormGroup;
  constructor(private formbuilder: FormBuilder,private  ajoutServie:AjoutService) { }

  ngOnInit(): void {
    this.name="azalmad";
    this.magasin= {nom:"",adresse:"",ville:"", };
    this.showHide(true,false,false);
    let patterns={
      nom:['', Validators.compose([Validators.required, ])],
      adresse:['', Validators.compose([Validators.required, ])],
      ville:['', Validators.compose([Validators.required, ])],
    };
    this.magasinForm=this.formbuilder.group(patterns);

    this.categorie= {nom:"",magasin:"", };

    let patterns1={
      nom:['', Validators.compose([Validators.required, ])],
      magasin:['', Validators.compose([Validators.required, ])],
    };
    this.categorieForm=this.formbuilder.group(patterns1);
  }
  magasinShow() {this.showHide(true,false,false);}
  categorieShow() {this.showHide(false,false,true);}
  produitShow() {this.showHide(false,true,false);}
  showHide(a,b,c) {this.showm=a;this.showp=b;this.showc=c;}

  persistMagasin() {
    console.log(this.magasin);
this.ajoutServie.persistMagasin(this.magasin,(data) => {this.magasinForm.reset();
});
  }
}
