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
    LcmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
