import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageCalcListComponent } from './homepage-calc-list/homepage-calc-list.component';
import { List1Component } from './list-1/list-1.component';
import { List2Component } from './list-2/list-2.component';
import { MatrixCalcComponent } from './matrix-calc/matrix-calc.component';
import { LayoutComponent } from './layout/layout.component';
import { MatrixDeterminantComponent } from './matrix-determinant/matrix-determinant.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';
import { MatrixInverseComponent } from './matrix-inverse/matrix-inverse.component';
import { TransposeComponent } from './transpose/transpose.component';
import { MatrixRankComponent } from './matrix-rank/matrix-rank.component';
import { GcdComponent } from './gcd/gcd.component';
import { LcmComponent } from './lcm/lcm.component';
import { AgeCalcComponent } from './age-calc/age-calc.component';
import { RatioComponent } from './MathCalculator/ratio/ratio.component';
import { MathsExponentComponent } from './maths-exponent/maths-exponent.component';
import { MathsRootComponent } from './maths-root/maths-root.component';
import { RGBHEXComponent } from './ColorConverter/rgb-hex/rgb-hex.component';
import { ColorTableComponent } from './ColorConverter/color-table/color-table.component';
import { ColorLayoutComponent } from './ColorConverter/color-layout/color-layout.component';
import { List3Component } from './list-3/list-3.component';
import { HEXRGBComponent } from './ColorConverter/hex-rgb/hex-rgb.component';
import { CMYKRGBComponent } from './ColorConverter/cmyk-rgb/cmyk-rgb.component';
import { MathsLayoutComponent } from './MathCalculator/maths-layout/maths-layout.component';
import { MedianComponent } from './MathCalculator/median/median.component';
import { StandardDeviationComponent } from './MathCalculator/standard-deviation/standard-deviation.component';
import { RootComponent } from './MathCalculator/root/root.component';
import { ExponentComponent } from './MathCalculator/exponent/exponent.component';
import { RatiooComponent } from './MathCalculator/ratioo/ratioo.component';
import { LcmmComponent } from './MathCalculator/lcmm/lcmm.component';
import { GcddComponent } from './MathCalculator/gcdd/gcdd.component';
import { ErrorFindComponent } from './MathCalculator/error-find/error-find.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    HomepageCalcListComponent,
    List1Component,
    List2Component,
    MatrixCalcComponent,
    LayoutComponent,
    MatrixDeterminantComponent,
    InfoComponent,
    MatrixInverseComponent,
    TransposeComponent,
    MatrixRankComponent,
    GcdComponent,
    LcmComponent,
    AgeCalcComponent,
    RatioComponent,
    MathsExponentComponent,
    MathsRootComponent,
    RGBHEXComponent,
    ColorTableComponent,
    ColorLayoutComponent,
    List3Component,
    HEXRGBComponent,
    CMYKRGBComponent,
    MathsLayoutComponent,
    MedianComponent,
    StandardDeviationComponent,
    RootComponent,
    ExponentComponent,
    RatiooComponent,
    LcmmComponent,
    GcddComponent,
    ErrorFindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RGBHEXComponent,
    HEXRGBComponent,
    CMYKRGBComponent,
    ColorLayoutComponent,
    MedianComponent,
    StandardDeviationComponent,
    RootComponent,
    ExponentComponent,
    RatioComponent,
    RatiooComponent,
    LcmmComponent,
    GcddComponent,
    ErrorFindComponent
  ]
})
export class AppModule { }
