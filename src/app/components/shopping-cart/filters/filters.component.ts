import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public options: String[];
  constructor() { 
    this.options = ['LAPTOP', 'PHONE', 'FURNITURE'];
  }

  ngOnInit(): void {
  }

}
