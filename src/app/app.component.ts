import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayCategory: any;
  classCategory: any;
  displayOptions = [
    { id: 1, name: 'בכיתה' }, { id: 2, name: 'במגמת' }];
  classOptions = [
    { id: 1, name: 'יא-1' }, { id: 2, name: 'יא-2' }, { id: 3, name: 'יא-3' }];

  helperFilter: any;
  helperOptions = [
    { id: 1, name: 'תוספת זמן' },
    { id: 2, name: 'הקראה בקול' },
    { id: 3, name: 'מבחן מותאם' }
  ]

  ngOnInit(): void {
    this.displayCategory = this.displayOptions[0];
    this.classCategory = this.classOptions[0];
  }
}
