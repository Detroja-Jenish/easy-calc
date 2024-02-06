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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    HomepageCalcListComponent,
    List1Component,
    List2Component,
    MatrixCalcComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
