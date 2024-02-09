import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-3',
  templateUrl: './list-3.component.html',
  styleUrl: './list-3.component.css'
})
export class List3Component {
  @Input() list = {
    heading: "",
    icon:"",
    items : [
      {
        icon : "",
        name : "",
        link: ''
      }
    ]
  };
}
