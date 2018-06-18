import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomErrorHandler } from './errors/custom-error-handler';

import { SchemaService } from './schemaForms/schema.service';

import { SfFieldComponent } from './schemaForms/sf-field/sf-field.component';
import { SFSectionComponent } from './schemaForms/sf-section/sf-section.component';
import { SfStepComponent } from './schemaForms/sf-step/sf-step.component';

@NgModule({
  declarations: [
    AppComponent,
    SfFieldComponent,
    SFSectionComponent,
    SfStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    SchemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
