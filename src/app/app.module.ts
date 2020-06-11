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
    PatienteducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
