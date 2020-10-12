import { TownshipService } from './../../service/township.service';
import { DivisionService } from './../../service/division.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Division, Township } from './../../model/division';
import { Component, OnInit } from '@angular/core';

declare let AOS:any;
@Component({
  selector: 'app-deliver-form',
  templateUrl: './deliver-form.component.html',
  styleUrls: ['./deliver-form.component.css']
})
export class DeliverFormComponent implements OnInit {

  divisions: Division[];
  townships:Township[];
  private _townships:Township[];
  transactionForm:FormGroup;
  division1:Division;

  constructor(private divisionService:DivisionService,
    private townshipService:TownshipService) { }

  ngOnInit(): void {
    this.divisionService.findAll().subscribe(
      division => this.divisions = division
    )
    this.townshipService.findAll().subscribe(
      township => this.townships = township
    )
    this.transactionForm=new FormGroup({
      'division':new FormControl(),
      'township':new FormControl(),
      'street':new FormControl(),
      'address' : new FormControl(),
      'phno':new FormControl(),            
    })
    this.division.valueChanges.subscribe(
      division => this.division1 = division
      
    )
    AOS.init()
  }
  get division(){
    return this.transactionForm.get('division');
  }
  get township(){
    return this.transactionForm.get('township');
  }
  get street(){
    return this.transactionForm.get('street')
  }
  get address(){
    return this.transactionForm.get('address')
  }
  get phno(){
    return this.transactionForm.get('phno');
  }
  save(){
    this.transactionForm.reset();
  }
}
