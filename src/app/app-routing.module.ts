import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MatrixCalcComponent } from './matrix-calc/matrix-calc.component';
import { HomepageCalcListComponent } from './homepage-calc-list/homepage-calc-list.component';
import { LayoutComponent } from './layout/layout.component';
import { MatrixDeterminantComponent } from './matrix-determinant/matrix-determinant.component';
import { MatrixInverseComponent } from './matrix-inverse/matrix-inverse.component';
import { TransposeComponent } from './transpose/transpose.component';
import { MatrixRankComponent } from './matrix-rank/matrix-rank.component';
import { GcdComponent } from './gcd/gcd.component';
import { LcmComponent } from './lcm/lcm.component';
const routes: Routes = [
  {
    path: "",
    component : LayoutComponent,
    children : [
      {
        path: "",
      component : HomepageComponent,
      },
      {
        path: "matrix",
        component : MatrixCalcComponent
      },{
        path: "matrix/determinant/:n",
        component : MatrixDeterminantComponent
      },{
        path: "matrix/inverse/:n",
        component : MatrixInverseComponent
      },{
        path: "matrix/transpose/:n",
        component : TransposeComponent
      },{
        path: "matrix/rank/:n",
        component : MatrixRankComponent
      }
      ,{
        path: "gcd",
        component : GcdComponent
      },{
        path: "lcm",
        component : LcmComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
