import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepratmentLitComponent } from './depratment-lit/depratment-lit.component';
import { EmployeeLitComponent } from './employee-lit/employee-lit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path: '',  redirectTo: '/departments', pathMatch: 'full'}, // Also write prefixed but its matches in all cases
  {path: 'departments', component: DepratmentLitComponent},
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'employees', component: EmployeeLitComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepratmentLitComponent,
                                 EmployeeLitComponent,
                                 PageNotFoundComponent,
                                 DepartmentDetailComponent,
                                 DepartmentContactComponent,
                                 DepartmentOverviewComponent];
