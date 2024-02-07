import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() info = {
    heading : "",
    infos : [
      {
        title : "",
        desc : "",
      }
    ]
  }
}
