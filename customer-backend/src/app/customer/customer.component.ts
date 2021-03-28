import { Component, OnInit, Input} from '@angular/core';

import { Customer } from './customer.model';

@Component({
  selector: 'cb-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() customer: Customer

  constructor() { }

  ngOnInit(): void {
  }

}
