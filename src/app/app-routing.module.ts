import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DimensionPedagogicaComponent } from './dimension-pedagogica/dimension-pedagogica.component';
import { DimensionTecnologicaComponent } from './dimension-tecnologico/dimension-tecnologico.component';
import { DimensionSocioefectivoComponent } from './dimension-socioefectivos/dimension-socioefectivos.component';
import { DimensionOrganizativoComponent } from './dimension-organizativa/dimension-organizativo.component';
import { TestValoracionCapacitacionComponent } from './test-valoracion-capacitacion/test-valoracion-capacitacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  { 
    path: 'departments/:id', 
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent}
    ]
   },
   { path: 'employees',   component: EmployeeListComponent },
   { path: 'dimension-pedagogica',   component: DimensionPedagogicaComponent },
   { path: 'dimension-tecnologica',   component: DimensionTecnologicaComponent },
   { path: 'dimension-socioefectiva',   component: DimensionSocioefectivoComponent },
   { path: 'dimension-organizativa',   component: DimensionOrganizativoComponent },
   { path: 'test-valoracion-capacitacion',   component: TestValoracionCapacitacionComponent },
   { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
  DepartmentDetailComponent, 
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentOverviewComponent,
  DimensionPedagogicaComponent,
  DimensionTecnologicaComponent,
  DimensionSocioefectivoComponent,
  DimensionOrganizativoComponent,
  TestValoracionCapacitacionComponent
]