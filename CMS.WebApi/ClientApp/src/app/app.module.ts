import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatModule } from './modules/shared/mat/mat.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { DesignationViewComponent } from './components/Designation/designation-view/designation-view.component';
import { DesignationEditComponent } from './components/Designation/designation-edit/designation-edit.component';
import { DesignationCreateComponent } from './components/Designation/designation-create/designation-create.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MedicineViewComponent } from './components/Medicine/medicine-view/medicine-view.component';
import { MedicineCreateComponent } from './components/Medicine/medicine-create/medicine-create.component';
import { MedicineEditComponent } from './components/Medicine/medicine-edit/medicine-edit.component';
import { ServiceViewComponent } from './components/Service/service-view/service-view.component';
import { ServiceCreateComponent } from './components/Service/service-create/service-create.component';
import { ServiceEditComponent } from './components/Service/service-edit/service-edit.component';
import { MedicineStockViewComponent } from './components/Medicine-Stock/medicine-stock-view/medicine-stock-view.component';
import { MedicineStockCreateComponent } from './components/Medicine-Stock/medicine-stock-create/medicine-stock-create.component';
import { MedicineStockEditComponent } from './components/Medicine-Stock/medicine-stock-edit/medicine-stock-edit.component';
import { CategoryViewComponent } from './components/Category/category-view/category-view.component';
import { CategoryCreateComponent } from './components/Category/category-create/category-create.component';
import { CategoryEditComponent } from './components/Category/category-edit/category-edit.component';
import { PatientViewComponent } from './components/Patient/patient-view/patient-view.component';
import { PatientCreateComponent } from './components/Patient/patient-create/patient-create.component';
import { PatientEditComponent } from './components/Patient/patient-edit/patient-edit.component';
import { DoctorViewComponent } from './components/Doctor/doctor-view/doctor-view.component';
import { DoctorCreateComponent } from './components/Doctor/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './components/Doctor/doctor-edit/doctor-edit.component';
import { DatePipe } from '@angular/common';
import { PhysicalCheckUpViewComponent } from './components/Physical-CheckUp/physical-check-up-view/physical-check-up-view.component';
import { PhysicalCheckUpCreateComponent } from './components/Physical-CheckUp/physical-check-up-create/physical-check-up-create.component';
import { PhysicalCheckUpEditComponent } from './components/Physical-CheckUp/physical-check-up-edit/physical-check-up-edit.component';
import { FollowUpViewComponent } from './components/Follow-Up/follow-up-view/follow-up-view.component';
import { FollowUpCreateComponent } from './components/Follow-Up/follow-up-create/follow-up-create.component';
import { FollowUpEditComponent } from './components/Follow-Up/follow-up-edit/follow-up-edit.component';
import { DoctorServiceViewComponent } from './components/Doctor-Service/doctor-service-view/doctor-service-view.component';
import { DoctorServiceCreateComponent } from './components/Doctor-Service/doctor-service-create/doctor-service-create.component';
import { DoctorServiceEditComponent } from './components/Doctor-Service/doctor-service-edit/doctor-service-edit.component';
import { PhysicalCheckUpPrintComponent } from './components/Physical-CheckUp/physical-check-up-print/physical-check-up-print.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DesignationViewComponent,
    DesignationEditComponent,
    DesignationCreateComponent,
    ConfirmDialogComponent,
    MedicineViewComponent,
    MedicineCreateComponent,
    MedicineEditComponent,
    ServiceViewComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
    MedicineStockViewComponent,
    MedicineStockCreateComponent,
    MedicineStockEditComponent,
    CategoryViewComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    PatientViewComponent,
    PatientCreateComponent,
    PatientEditComponent,
    DoctorViewComponent,
    DoctorCreateComponent,
    DoctorEditComponent,
    PhysicalCheckUpViewComponent,
    PhysicalCheckUpCreateComponent,
    PhysicalCheckUpEditComponent,
    FollowUpViewComponent,
    FollowUpCreateComponent,
    FollowUpEditComponent,
    DoctorServiceViewComponent,
    DoctorServiceCreateComponent,
    DoctorServiceEditComponent,
    PhysicalCheckUpPrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
