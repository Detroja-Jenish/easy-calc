import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-2',
  templateUrl: './list-2.component.html',
  styleUrl: './list-2.component.css'
})
export class List2Component {
  @Input() list = {
    icon : "",
    heading: "",
    items : [
      ""
    ]
  };
}
