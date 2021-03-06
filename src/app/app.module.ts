import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnquirybuttonComponent } from './enquirybutton/enquirybutton.component';
import { CrownandbridgesComponent } from './treatment/crownandbridges/crownandbridges.component';
import { RootcanalComponent } from './treatment/rootcanal/rootcanal.component';
import { PeriodonticsComponent } from './treatment/periodontics/periodontics.component';
import { PediatricdentistryComponent } from './treatment/pediatricdentistry/pediatricdentistry.component';
import { OrthodonticsComponent } from './treatment/orthodontics/orthodontics.component';
import { ImpactedteethComponent } from './treatment/impactedteeth/impactedteeth.component';
import { PatienteducationComponent } from './treatment/patienteducation/patienteducation.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatCardModule} from '@angular/material/card';
import { ContactusComponent } from './contactus/contactus.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { LogoImageComponent } from './logo-image/logo-image.component';
import { CosmeticDentistryComponent } from './treatment/cosmetic-dentistry/cosmetic-dentistry.component';
import { DentalImplantsComponent } from './treatment/dental-implants/dental-implants.component';
import { DentaljewelleryComponent } from './treatment/dentaljewellery/dentaljewellery.component';
import { FullMouthRehabilitationComponent } from './treatment/full-mouth-rehabilitation/full-mouth-rehabilitation.component';
import { InvisalignComponent } from './treatment/invisalign/invisalign.component';
import { PorcelainLaminateVeneersComponent } from './treatment/porcelain-laminate-veneers/porcelain-laminate-veneers.component';
import { SmileDesigningComponent } from './treatment/smile-designing/smile-designing.component';
import { ToothColouredFillingComponent } from './treatment/tooth-coloured-filling/tooth-coloured-filling.component';
import { ToothWhiteningComponent } from './treatment/tooth-whitening/tooth-whitening.component';
import { TreatmentPageComponent } from './treatment/treatment-page/treatment-page.component';
import { PatientinfoComponent } from './enquiry/patientinfo/patientinfo/patientinfo.component';
import {MatRadioModule} from '@angular/material/radio';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AboutdeveloperComponent } from './aboutdeveloper/aboutdeveloper.component';
import { DialogComponent } from './enquiry/dialog/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './toolbar/header/header.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    EnquirybuttonComponent,
    CrownandbridgesComponent,
    RootcanalComponent,
    PeriodonticsComponent,
    PediatricdentistryComponent,
    OrthodonticsComponent,
    ImpactedteethComponent,
    PatienteducationComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    LogoImageComponent,
    CosmeticDentistryComponent,
    DentalImplantsComponent,
    DentaljewelleryComponent,
    FullMouthRehabilitationComponent,
    InvisalignComponent,
    PorcelainLaminateVeneersComponent,
    SmileDesigningComponent,
    ToothColouredFillingComponent,
    ToothWhiteningComponent,
    TreatmentPageComponent,
    PatientinfoComponent,
    FooterComponent,
    AboutdeveloperComponent,
    DialogComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
