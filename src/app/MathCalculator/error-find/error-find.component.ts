import { Component } from '@angular/core';

@Component({
  selector: 'app-error-find',
  templateUrl: './error-find.component.html',
  styleUrl: './error-find.component.css'
})
export class ErrorFindComponent {
  information = {
    heading : "Error Find Calculator",
    infos : [
      {
        title : "What is Absolute Error ?",
        desc : `The difference between the measured or inferred value of a quantity and its actual value , given by. (sometimes with the absolute value taken) is called the absolute error. The absolute error of the sum or difference of a number of quantities is less than or equal to the sum of their absolute errors.

        Formula to Find Absolute Error :
        
        
        Absolute Error = ( Vtrue - Vobserved )`
      },{
        title : "What is Relative Error ?",
        desc : `The relative error is the absolute error divided by the magnitude of the exact value. The percent error is the relative error expressed in terms of per 100.

        Formula to Find Relative Error :
        
        Relative error =	
        (Vtrue - Vobserved)<hr>
        Vtrue
        `
      },{
        title : "What is Percentage Error ?",
        desc : `
        The percentage error, also known as percent error, is a measure of how inaccurate a measurement is, standardized to how large the measurement is. It is the relative error expressed in terms of per 100.
        
        Formula to Find Percentage Error :
        
        
        Percentage error =
        (Vtrue-Vobserved)
        Vtrue
        × 100
        `
      },{
        title : "Example",
        desc : `Observed Value=9.0098, True Value=10
        Ans.
        Absolute Error =( Vtrue - Vobserved ) = ( 10 - 9.0098 ) = 0.9902
        
        Relative error =	
        (Vtrue - Vobserved)
        Vtrue
        
        Relative error =	
        (10 - 9.0098)
        10
        
        Relative error =	
         0.09902
        
        Percentage error
        
        =	
        (Vtrue-Vobserved)
        Vtrue
        × 100
        
        =	
        (10 - 9.0098)
        10
        × 100
        =	
        9.902 %
        `
      }
    ]
  }
}
