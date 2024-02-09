import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  information = {
    heading : "Root Calculator",
    infos : [
      {
        title : "What is Root ?",
        desc : "The square root of a number is a value that when multiplied by itself equals the original number."
      },{
        title : "Example",
        desc : `x√Y  =  ?
        Let's A= x√Y
        A =  (Y)1/x
        
        For Example 3√27= ?
        Let's A= 3√27
        A= (27)1/3
        A=(33)1/3
        A=3`
      }
    ]
  }
}
