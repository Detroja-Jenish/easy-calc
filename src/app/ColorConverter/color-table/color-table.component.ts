import { Component } from '@angular/core';

@Component({
  selector: 'app-color-table',
  templateUrl: './color-table.component.html',
  styleUrl: './color-table.component.css'
})
export class ColorTableComponent {
  colors = [
    {
      colorName : "red",
      rgb : "(255,0,0)",
      hex : "#FF0000",
      cmyk : "(0,100,100,0)"
    },
    {
      colorName : "Green",
      rgb : "(0,255,0)",
      hex : "#00FF00",
      cmyk : "(100,0,100,0)"
    },{
      colorName : "Blue",
      rgb : "(0,0,255)",
      hex : "#0000FF",
      cmyk : "(100,100,0,0)"
    },{
      colorName : "Yellow",
      rgb : "(255,255,0)",
      hex : "#FFFF00",
      cmyk : "(0,0,100,0)"
    },{
      colorName : "Cyan",
      rgb : "(0,255,255)",
      hex : "#00FFFF",
      cmyk : "(100,0,0,0)"
    },{
      colorName : "Magenta",
      rgb : "(255,0,255)",
      hex : "#FF00FF",
      cmyk : "(0,100,0,0)"
    },{
      colorName : "Pink",
      rgb : "(255,192,203)",
      hex : "#FFC0CB",
      cmyk : "(0,25,20,0)"
    },{
      colorName : "Orange",
      rgb : "(255,165,0)",
      hex : "#FFA500",
      cmyk : "(0,35,100,0)"
    },{
      colorName : "Sky Blue",
      rgb : "(135,206,235)",
      hex : "#87CEEB",
      cmyk : "(43,12,0,8)"
    },{
      colorName : "Wheat",
      rgb : "(245,222,179)",
      hex : "#F5DEB3",
      cmyk : "(0,9,27,4)"
    },{
      colorName : "Silver",
      rgb : "(192,192,192)",
      hex : "#C0C0C0",
      cmyk : "(0,0,0,25)"
    },{
      colorName : "Chocolate",
      rgb : "(210,105,30)",
      hex : "#D2691E",
      cmyk : "(0,50,86,18)"
    },{
      colorName : "Navy",
      rgb : "(0,0,128)",
      hex : "#000080",
      cmyk : "(100,100,0,50)"
    },{
      colorName : "White",
      rgb : "(255,255,255)",
      hex : "#FFFFFF",
      cmyk : "(0,0,0,0)"
    },
  ]
}
