import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldComponent } from './schemaForms/sf-field/sf-field.component';
import { SFSectionComponent } from './schemaForms/sf-section/sf-section.component';
import { SfStepComponent } from './schemaForms/sf-step/sf-step.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    SFSectionComponent,
    SfStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
