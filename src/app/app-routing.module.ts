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
import { RatioComponent } from './ratio/ratio.component';
import { MathsExponentComponent } from './maths-exponent/maths-exponent.component';
import { ColorLayoutComponent } from './ColorConverter/color-layout/color-layout.component';
import { RGBHEXComponent } from './ColorConverter/rgb-hex/rgb-hex.component';
import { HEXRGBComponent } from './ColorConverter/hex-rgb/hex-rgb.component';
import { CMYKRGBComponent } from './ColorConverter/cmyk-rgb/cmyk-rgb.component';
import { RootComponent } from './MathCalculator/root/root.component';
import { MathsLayoutComponent } from './MathCalculator/maths-layout/maths-layout.component';
import { ExponentComponent } from './MathCalculator/exponent/exponent.component';
import { RatiooComponent } from './MathCalculator/ratioo/ratioo.component';
import { GcddComponent } from './MathCalculator/gcdd/gcdd.component';
import { LcmmComponent } from './MathCalculator/lcmm/lcmm.component';
import { ErrorFindComponent } from './MathCalculator/error-find/error-find.component';
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
      },{
        path: "ratio",
        component : RatioComponent
      },{
        path: "exponent",
        component : MathsExponentComponent
      },{
        path: "colorConverter",
        component : ColorLayoutComponent,
        children : [
          {path: "rgb-hex", component: RGBHEXComponent},
          {path: "hex-rgb", component: HEXRGBComponent},
          {path: "cmyk-rgb", component: CMYKRGBComponent}
        ]
      },{
        path: "maths-calc",
        component: MathsLayoutComponent,
        children: [
          {path: "root", component: RootComponent},
          {path: "exponent", component: ExponentComponent},
          {path: "ratio", component: RatiooComponent},
          {path: "gcd", component: GcddComponent},
          {path: "lcm", component: LcmmComponent},
          {path: "error-find", component: ErrorFindComponent},
          // {path: "hex-rgb", component: HEXRGBComponent},
          // {path: "cmyk-rgb", component: CMYKRGBComponent}
        ]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
