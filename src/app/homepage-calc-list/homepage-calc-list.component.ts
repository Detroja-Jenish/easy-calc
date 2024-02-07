import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage-calc-list',
  templateUrl: './homepage-calc-list.component.html',
  styleUrl: './homepage-calc-list.component.css'
})
export class HomepageCalcListComponent {
  
   calcs = [
    {
      icon : "fa fa-calculator",
      heading : "Financial",
      items : [
        {
          icon: "fas fa-money-bill-wave",
          name : "Loan EMI Calculator",
          colorStrip : "bg-danger"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "SIP Calculator",
          colorStrip : "bg-success"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "Simple Interest Calc",
          colorStrip : "bg-info"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "Compond Interest Calc",
          colorStrip : "bg-info"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "SIP Calculator",
          colorStrip : "bg-danger"
        },
        {
          icon: "fa fa-line-chart",
          name : "CAGR Calculator",
          colorStrip : "bg-warning"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "RD Calculator",
          colorStrip : "bg-primary"
        },
        {
          icon: "fa fa-angle-double-down",
          name : "Debt Reaction Calculator",
          colorStrip : "bg-dark"
        },
        {
          icon: "fa fa-sign-out",
          name : "Swap Calculator",
          colorStrip : "bg-danger"
        },
        {
          icon: "fa fa-exchange",
          name : "STP Calculator",
          colorStrip : "bg-primary"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "FD Calculator",
          colorStrip : "bg-warning"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "PPF Calculator",
          colorStrip : "bg-warning"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "RULE of 72 Calculator",
          colorStrip : "bg-success"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "BM Calculator",
          colorStrip : "bg-danger"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "CII Calculator",
          colorStrip : "bg-primary"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "Advanced CII Calculator",
          colorStrip : "bg-warning"
        },
        {
          icon: "fas fa-money-bill-wave",
          name : "Gratuity Calculator",
          colorStrip : "bg-success"
        },
        {
          icon: "fa fa-percentage",
          name : "Percentage Calculator",
          colorStrip : "bg-success"
        },
        {
          icon: "fa fa-exchange",
          name : "Interest Rate Converter",
          colorStrip : "bg-warning"
        }

      ]
    },
    {
      heading: "Math Calculator",
      icon : "fa fa-calculator",
      items : [
        {
          icon : "fa fa-th",
          name : "matrix calculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-circle",
          name : "Volume calculator",
          colorStrip : "bg-info"
        },
        {
          icon : "fa fa-area-chart",
          name : "Area calculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-calculator",
          name : "GCD calculator",
          colorStrip : "bg-primary"
        },
        {
          icon : "fa fa-calculator",
          name : "LCM calculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-th",
          name : "Percentage calculator",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-calculator",
          name : "Exponent calculator",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-calculator",
          name : "Root calculator",
          colorStrip : "bg-primary"
        },
        {
          icon : "fa fa-warning",
          name : "Error Find calculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-calculator",
          name : "Standard calculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-calculator",
          name : "Median calculator",
          colorStrip : "bg-info"
        }
      ]
    },

    {
      heading: "Metal Weight Caclculator",
      icon : "fa fa-calculator",

      items : [
        {
          icon : "fa fa-circle",
          name : "Round Bar Weight",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-cube",
          name : "Round Bar Weight",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-cube",
          name : "Ractangle Pipe Weight",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-clone",
          name : "Flat Plate Weight",
          colorStrip : "bg-primary"
        },
        {
          icon : "fa fa-square",
          name : "Square Bar Weight",
          colorStrip : "bg-info"
        },
        {
          icon : "fa fa-square-0",
          name : "Square Pipe Weight",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-cube",
          name : "Ractangle Bar Weight",
          colorStrip : "bg-dark"
        },
        {
          icon : "fa fa-circle-0  ",
          name : "Round Pipe Weight",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-text-width",
          name : "T-Bar Wieght",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-caret-up bold",
          name : "Triangular bar Weight",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-caret-up bold",
          name : "Triangular pipe Weight",
          colorStrip : "bg-warning"
        }
      ]
    },

    {
      heading : "Structural Steel Section",
      icon : "fa fa-calculator",

      items : [
        {
          icon : "fa fa-bold",
          name : "Search Beam",
          colorStrip : "bg-info"
        },
        {
          icon : "fa fa-copy",
          name : "Search Channel",
          colorStrip : "bg-primary"
        },
        {
          icon : "",
          name : "Search Equal Angle",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-underline",
          name : "Search UnEqual Angle",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-text-width",
          name : "Search Tree Bar",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-lightbulb-o",
          name : "Search Bulb Angle",
          colorStrip : "bg-success"
        }
      ]
    },
    {
      icon : "fa fa-calculator",
      heading : "Date & Time Calculator",
      items : [
        {
          icon : "fa fa-calculator",
          name : "Add/Subtract Date",
          colorStrip : "bg-primary"
        },
        {
          icon : "fa fa-calculator",
          name : "Get Day From Date",
          colorStrip : "bg-primary"
        },
        {
          icon : "fa fa-calculator",
          name : "Days Between Two Dates",
          colorStrip : "bg-primary"
        },
        {
          icon : "fa fa-clock",
          name : "Time Calculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-clock",
          name : "Time-Card Date",
          colorStrip : "bg-primary"
        }
      ]
    },
    {
      icon : "fa fa-calculator",
      heading : "Color Converter",
      items : [
        {
          icon : "fa fa-retweet",
          name : "RGB to Hex Converter",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-retweet",
          name : "Hex to RGB Converter",
          colorStrip : "bg-info"
        },
        {
          icon : "fa fa-retweet",
          name : "CMYK to RGB Converter",
          colorStrip : "bg-success"
        }
      ]
    },
    {
      icon : "fa fa-calculator",
      heading : "Health And Fitness Calculator",
      items : [
        {
          icon : "fa fa-medkit",
          name : "Army Body Fat",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-heartbeat",
          name : "Calorie & Carbohydrate",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-balance-scale",
          name : "BMI Calculator",
          colorStrip : "bg-warning"
        }
      ]
    },

    {
      icon : "fa fa-calculator",
      heading : "Other Calculator",
      items : [
        {
          icon : "fa fa-sort-numeric-asc",
          name : "Age Claculator",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-mars-stroke-v",
          name : "Pendulam Claculator",
          colorStrip : "bg-info"
        },
        {
          icon : "fa fa-lightbulb-o",
          name : "LED Claculator",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-tint",
          name : "Tip Claculator",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-key",
          name : "Password Genrator",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-calendar",
          name : "Due Dtae Claculator",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-moon-o",
          name : "Sleep Claculator",
          colorStrip : "bg-info"
        },
        {
          icon : "fa fa-calculator",
          name : "401k Claculator",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-calculator",
          name : "Golden Ratio Claculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-tint",
          name : "Fuel Cost Claculator",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-square",
          name : "Square Footage Claculator",
          colorStrip : "bg-dark"
        },
        {
          icon : "fa fa-calculator",
          name : "Pace Claculator",
          colorStrip : "bg-warning"
        },
        {
          icon : "fa fa-car",
          name : "Milage Claculator",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-calculator",
          name : "Law of Cosine Claculator",
          colorStrip : "bg-danger"
        },
        {
          icon : "fa fa-calculator",
          name : "Parlay Claculator",
          colorStrip : "bg-info"
        },
        {
          icon : "fa fa-calculator",
          name : "Probability Claculator",
          colorStrip : "bg-success"
        },
        {
          icon : "fa fa-calculator",
          name : "Annuity Claculator",
          colorStrip : "bg-primary"
        },
        {
          icon : "fa fa-calculator",
          name : "Odds Claculator",
          colorStrip : "bg-success"
        },
      ]
    }
  ]

}
