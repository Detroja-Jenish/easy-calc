import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MatrixCalcComponent } from './matrix-calc/matrix-calc.component';
import { HomepageCalcListComponent } from './homepage-calc-list/homepage-calc-list.component';
import { LayoutComponent } from './layout/layout.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
