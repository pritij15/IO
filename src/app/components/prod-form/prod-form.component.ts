 import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
 import { IpCatg, IproCat } from 'src/app/interface/std';

 @Component({
   selector: 'app-prod-form',
   templateUrl: './prod-form.component.html',
   styleUrls: ['./prod-form.component.scss']
 })
 export class ProdFormComponent implements OnInit {

//    @ViewChild("pName")pName !: ElementRef;
//    @ViewChild("pDescription")pDescription !: ElementRef;
  

//   @Output() prodData : EventEmitter<IproCat> = new EventEmitter<IproCat>()

//   //  pName : string = '';
//   //  pDescription : string = '';

//     prodArr : Array<IproCat>= [
//       {
//         pName : "Samsung",
//         pDescription : "Samsung M31",
//         pCatg : "Product"
//       },
//       {
//         pName : "Nokia",
//         pDescription : "Nokia Basic",
//         pCatg : "Catlog"
//       }
//     ]
    

   constructor() { }

   ngOnInit(): void {
   }

//   addProdCatg(catg : IpCatg){
//     console.log(catg);
//     let obj : IproCat = {
//       pName : this.pName.nativeElement.value,
//       pDescription : this.pDescription.nativeElement.value,
//       pCatg : catg
//     }
//     if(!Object.values(obj).includes("")){
//          console.log(obj);
//          this.prodArr.push(obj);
//           this.prodData.emit(obj);

//          this.pName.nativeElement.value = '';
//          this.pDescription.nativeElement.value = '';
  
//     }
//   }
}
