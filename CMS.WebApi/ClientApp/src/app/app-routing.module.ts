import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/Category/category-create/category-create.component';
import { CategoryEditComponent } from './components/Category/category-edit/category-edit.component';
import { CategoryViewComponent } from './components/Category/category-view/category-view.component';
import { DesignationCreateComponent } from './components/Designation/designation-create/designation-create.component';
import { DesignationEditComponent } from './components/Designation/designation-edit/designation-edit.component';
import { DesignationViewComponent } from './components/Designation/designation-view/designation-view.component';
import { DoctorServiceCreateComponent } from './components/Doctor-Service/doctor-service-create/doctor-service-create.component';
import { DoctorServiceViewComponent } from './components/Doctor-Service/doctor-service-view/doctor-service-view.component';
import { DoctorCreateComponent } from './components/Doctor/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './components/Doctor/doctor-edit/doctor-edit.component';
import { DoctorViewComponent } from './components/Doctor/doctor-view/doctor-view.component';
import { FollowUpCreateComponent } from './components/Follow-Up/follow-up-create/follow-up-create.component';
import { FollowUpEditComponent } from './components/Follow-Up/follow-up-edit/follow-up-edit.component';
import { FollowUpViewComponent } from './components/Follow-Up/follow-up-view/follow-up-view.component';
import { HomeComponent } from './components/home/home.component';
import { MedicineStockCreateComponent } from './components/Medicine-Stock/medicine-stock-create/medicine-stock-create.component';
import { MedicineStockEditComponent } from './components/Medicine-Stock/medicine-stock-edit/medicine-stock-edit.component';
import { MedicineStockViewComponent } from './components/Medicine-Stock/medicine-stock-view/medicine-stock-view.component';
import { MedicineCreateComponent } from './components/Medicine/medicine-create/medicine-create.component';
import { MedicineEditComponent } from './components/Medicine/medicine-edit/medicine-edit.component';
import { MedicineViewComponent } from './components/Medicine/medicine-view/medicine-view.component';
import { PatientCreateComponent } from './components/Patient/patient-create/patient-create.component';
import { PatientEditComponent } from './components/Patient/patient-edit/patient-edit.component';
import { PatientViewComponent } from './components/Patient/patient-view/patient-view.component';
import { PhysicalCheckUpCreateComponent } from './components/Physical-CheckUp/physical-check-up-create/physical-check-up-create.component';
import { PhysicalCheckUpEditComponent } from './components/Physical-CheckUp/physical-check-up-edit/physical-check-up-edit.component';
import { PhysicalCheckUpPrintComponent } from './components/Physical-CheckUp/physical-check-up-print/physical-check-up-print.component';
import { PhysicalCheckUpViewComponent } from './components/Physical-CheckUp/physical-check-up-view/physical-check-up-view.component';
import { ServiceCreateComponent } from './components/Service/service-create/service-create.component';
import { ServiceEditComponent } from './components/Service/service-edit/service-edit.component';
import { ServiceViewComponent } from './components/Service/service-view/service-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'designation', component: DesignationViewComponent },
  { path: 'designation-create', component: DesignationCreateComponent },
  { path: 'designation-edit/:id', component: DesignationEditComponent },
  { path: 'medicine', component: MedicineViewComponent },
  { path: 'medicine-create', component: MedicineCreateComponent },
  { path: 'medicine-edit/:id', component: MedicineEditComponent },
  { path: 'service', component: ServiceViewComponent },
  { path: 'service-create', component: ServiceCreateComponent },
  { path: 'service-edit/:id', component: ServiceEditComponent },
  { path: 'category', component: CategoryViewComponent },
  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'category-edit/:id', component: CategoryEditComponent },
  { path: 'medicine-stock', component: MedicineStockViewComponent },
  { path: 'medicine-stock-create', component: MedicineStockCreateComponent },
  { path: 'medicine-stock-edit/:id', component: MedicineStockEditComponent },
  { path: 'patient', component: PatientViewComponent },
  { path: 'patient-create', component: PatientCreateComponent },
  { path: 'patient-edit/:id', component: PatientEditComponent },
  { path: 'doctor', component: DoctorViewComponent },
  { path: 'doctor-create', component: DoctorCreateComponent },
  { path: 'doctor-edit/:id', component: DoctorEditComponent },
  { path: 'physicalCheckUp', component: PhysicalCheckUpViewComponent },
  { path: 'physicalCheckUp-create', component: PhysicalCheckUpCreateComponent },
  { path: 'physicalCheckUp-edit/:id', component: PhysicalCheckUpEditComponent },
  { path: 'print-physicalCheckUp/:id', component: PhysicalCheckUpPrintComponent },
  { path: 'followUp', component: FollowUpViewComponent },
  { path: 'followUp-create', component: FollowUpCreateComponent },
  { path: 'followUp-edit/:id', component: FollowUpEditComponent },
  { path: 'doctorService', component: DoctorServiceViewComponent },
  { path: 'doctorService-create', component: DoctorServiceCreateComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
