import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formControl = new FormControl();
  options: Observable<any> = of([]);

  constructor() {
  }

  ngOnInit() {
  }
}
