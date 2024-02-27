 import { Component, Input, OnInit } from '@angular/core';
 import { IproCat } from 'src/app/interface/std';

 @Component({
   selector: 'app-prod-card',
   templateUrl: './prod-card.component.html',
   styleUrls: ['./prod-card.component.scss']
 })
 export class ProdCardComponent implements OnInit {
 @Input() getProd !: IproCat
   constructor() { }

   ngOnInit(): void {
   }

 }
