import { Component } from '@angular/core';

@Component({
  selector: 'app-color-layout',
  templateUrl: './color-layout.component.html',
  styleUrl: './color-layout.component.css'
})
export class ColorLayoutComponent {
  colorConverters={
    icon: "fa fa-adjust",
    heading : "Color converter",
    items : [
      {
        icon : "fa fa-retweet",
        name : "RGB to Hex Converter",
        link: '/colorConverter/rgb-hex'
      },{
        icon : "fa fa-retweet",
        name : "Hex to RGB Conveter",
        link: '/colorConverter/hex-rgb'
      },{
        icon : "fa fa-retweet",
        name : "CMYK to RGB Conveerter",
        link: '/colorConverter/cmyk-rgb'
      }
    ]
  }
}
