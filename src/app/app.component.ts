import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IpCatg, IproCat, Istd } from './interface/std';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'IO';
  msgFromParent : string = `work hard and party hard!!`
  msgFromChild : string = '';
  skillsArray : Array<string> = ["HTML","CSS","JS","ANGULAR"];

  studentsArr : Array<Istd> = [{
    fname : "Jhon",
    lname : "Doe",
    email : "jd@gmail.com",
    contact : 1234567890
  }]

  pName : string = '';
  pDescription : string = '';

  prodArr : Array<IproCat>= [
    {
      pName : "Samsung",
      pDescription : "Samsung M31",
      pCatg : "Product"
    },
    {
      pName : "Nokia",
      pDescription : "Nokia Basic",
      pCatg : "Catlog"
    }
  ]
  
  @ViewChild("todo") todoRef !: ElementRef 
  constructor(){

  }
  onAddStudent(fname : HTMLInputElement, lname : HTMLInputElement, email : HTMLInputElement ,contact : HTMLInputElement){
    if(fname.value && lname.value && email.value && contact.value){
    let obj : Istd ={
      fname : fname.value,
      lname : lname.value,
      email : email.value,
      contact : +contact.value
      
    }
    console.log(obj);
    this.studentsArr.push(obj);
    fname.value = '';
    lname.value = '';
    email.value = '';
    contact.value = '';
  }
}
  ngOnInit(): void {
    
  }

  addSkillSet(skill : string){
    console.log(skill);
    this.skillsArray.push(skill);
  }

  getStdData(stdObj : Istd){
    console.log(stdObj);
    this.studentsArr.push(stdObj);
    

  }
  // addSkill(ele:HTMLInputElement){
  //   if(ele.value){
  //     console.log(ele.value);
  //     this.skillsArray.push(ele.value);
  //     ele.value = '';

  //   }
  // }

  addSkill(){
    console.log(this.todoRef.nativeElement.value);
    if(this.todoRef.nativeElement.value){
      this.skillsArray.push(this.todoRef.nativeElement.value);
      this.todoRef.nativeElement.value = '';
    }
  }
  getMsgFromChild(msg : string){
    console.log(msg);
    this.msgFromChild = msg;

  }
  // addProduct(){
  //   let obj : IproCat = {
  //    pName : this.pName,
  //    pDescription : this.pDescription,
  //    pCatg : "Product"
  //   }
  //   if(!Object.values(obj).includes("")){
  //   console.log(obj);
  //   this.prodArr.push(obj);
  //   this.pName = '';
  //   this.pDescription = '';
  //   }
    
  // }
  // addCatlog(){
  //   let obj : IproCat = {
  //     pName : this.pName,
  //     pDescription : this.pDescription,
  //     pCatg : "Catlog"
  //     }
  //    if(!Object.values(obj).includes("")){
  //     console.log(obj);
  //     this.prodArr.push(obj);
  //     this.pName = '';
  //     this.pDescription = '';
  //     }

  // }

  addProdCatg(catg : IpCatg){
    console.log(catg);
    let obj : IproCat = {
      pName : this.pName,
      pDescription : this.pDescription,
      pCatg : catg
    }
    if(!Object.values(obj).includes("")){
         console.log(obj);
         this.prodArr.push(obj);
         this.pName = '';
         this.pDescription = '';
         }
        
  }

  // getProdData(pName : HTMLInputElement, pDescription : HTMLInputElement, catg : IpCatg){
  //   if(pName.value && pDescription.value){
  //     let obj : IproCat = {
  //       pName : this.pName.nativeElement.value,
  //       pDescription : this.pDescription.nativeElement.value,
  //       pCatg : catg
  //     }
  //     if(!Object.values(obj).includes("")){
  //          console.log(obj);
  //          this.prodArr.push(obj);
  //          this.pName.nativeElement.value = '';
  //          this.pDescription.nativeElement.value = '';
  //          }
  //     }

  
  //}



 }
