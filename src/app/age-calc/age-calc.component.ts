import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calc',
  templateUrl: './age-calc.component.html',
  styleUrl: './age-calc.component.css'
})
export class AgeCalcComponent {
  hello() {
    console.log("hello")
  }


  calc = [
    {
      icon: "fa fa-calculator",
      title: "Age Calculator"
    },
    {
      icon: "fa fa-calculator",
      title: "Pendulum Calculator"
    },
    {
      icon: "fa fa-bulb",
      title: "LED Calculator",
    },
    {
      icon: "fa fa-clock",
      title: "Time Calculator",
    },
    {
      icon: "fa fa-blood",
      title: "Tip Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "Due Date Calculator",
    },
    {
      icon: "fa fa-clock",
      title: "Time Card Calculator",
    },
    {
      icon: "fa fa-moon",
      title: "Sleep Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "401K Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "Golden Ratio Calculator",
    },
    {
      icon: "fa fa-car",
      title: "Fuel Cost Calculator",
    },
    {
      icon: "fa fa-square",
      title: "Square Footage Calculator",
    },
    {
      icon: "fa fa-clock",
      title: "Pace Calculator",
    },
    {
      icon: "fa fa-car",
      title: "Mileage Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "Law of Cosines Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "Parlay Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "Probability Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "Annuity Calculator",
    },
    {
      icon: "fa fa-calculator",
      title: "Odds Calculator",
    },
  ]
}
