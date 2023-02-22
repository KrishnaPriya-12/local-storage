import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OrderDTO } from '../order-dto';
import { OrderOperationService } from '../order-operation.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  category:string='';
  bloomSeason:string='';
  imageName:string='';
  about:string='';

  constructor() {

    this.category=localStorage.getItem("category") ||'';
    this.bloomSeason= localStorage.getItem("bloomSeason")||'';
    this.imageName=localStorage.getItem("imageName")||'';
    this.about=localStorage.getItem("about")||'';
   }

 
  
  
  

}
