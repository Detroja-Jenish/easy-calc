import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-1',
  templateUrl: './list-1.component.html',
  styleUrl: './list-1.component.css'
})
export class List1Component {
  @Input() list = {
    heading: "",
    items : [
      {
        icon : "",
        name : "",
        colorStrip : ""
      }
    ]
  };
}
