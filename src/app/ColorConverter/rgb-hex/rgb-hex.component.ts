import { Component } from '@angular/core';

@Component({
  selector: 'app-rgb-hex',
  templateUrl: './rgb-hex.component.html',
  styleUrl: './rgb-hex.component.css'
})
export class RGBHEXComponent {
  componentToHex = (c : number) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  rgbToHex = (r : number, g : number, b :number) => {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  rgb2cmyk (r:number,g:number,b:number) {
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;
   
    //remove spaces from input RGB values, convert to int
    var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
    var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
    var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
   
    if ( r==null || g==null || b==null ||
        isNaN(r) || isNaN(g)|| isNaN(b) )
    {
      alert ('Please enter numeric RGB values!');
      return;
    }
    if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
      alert ('RGB values must be in the range 0 to 255.');
      return;
    }
   
    // BLACK
    if (r==0 && g==0 && b==0) {
     computedK = 1;
     return [0,0,0,1];
    }
   
    computedC = 1 - (r/255);
    computedM = 1 - (g/255);
    computedY = 1 - (b/255);
   
    var minCMY = Math.min(computedC,
                 Math.min(computedM,computedY));
    computedC = (computedC - minCMY) / (1 - minCMY) ;
    computedM = (computedM - minCMY) / (1 - minCMY) ;
    computedY = (computedY - minCMY) / (1 - minCMY) ;
    computedK = minCMY;
   
    return `CMYK(${(computedC*100).toFixed(1)}, ${(computedM*100).toFixed(1)}, ${(computedY*100).toFixed(1)}, ${(computedK*100).toFixed(1)})`;
   }

  r = 0
  g = 255 
  b = 255
  rgb=`rgb(${this.r},${this.g},${this.b})`
  hex=this.rgbToHex(this.r, this.g, this.b).toUpperCase()
  cmyk=this.rgb2cmyk(this.r, this.g, this.b)

  convert(){
    console.log("-------")
    this.rgb=`rgb(${this.r},${this.g},${this.b})`
    this.hex = this.rgbToHex(this.r, this.g, this.b).toUpperCase()
    this.cmyk=this.rgb2cmyk(this.r, this.g, this.b)
  }
}
