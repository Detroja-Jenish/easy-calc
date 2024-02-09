import { Component } from '@angular/core';

@Component({
  selector: 'app-gcdd',
  templateUrl: './gcdd.component.html',
  styleUrl: './gcdd.component.css'
})
export class GcddComponent {
  information = {
    heading : "GCD Calculator",
    infos : [
      {
        title : "What is GCD ?",
        desc : "The greatest common divisor(GCD) (also known as greatest common factor(gcf), highest common divisor(hcd) or highest common factor(hcf)) of a set of numbers is the largest."
      },{
        title : "What Value?",
        desc : "Positive integer number that divides all the numbers in the set without remainder. It is the biggest multiple of all numbers in the set."
      }
    ]
  }
}
