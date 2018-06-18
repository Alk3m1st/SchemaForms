import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SchemaService } from 'app/schemaForms/schema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Schema Forms';
  form: FormGroup;
  schema: Object;

  constructor(private schemaService: SchemaService) {}

  ngOnInit(): void {
    this.schema = this.schemaService.getSchema();
    this.form = this.processSchema(this.schema);
  }

  processSchema(schema: any) : FormGroup {
    // Validate schema and throw console error if invalid?
    let controls = {};

    // Allow reading in previous state / data (has to go into FormControl constructor)

    this.mapFields(schema.fields, controls);

    let fg = new FormGroup(controls);
    return fg;
  }

  mapFields(fields: any[], controls: object) {
    fields.map(field => {
      // console.log(field);
      // console.log(field.fields !== undefined);

      if(field.fields !== undefined && field.fields.length !== 0)
        this.mapFields(field.fields, controls);

      // Is a valid field to map into the form controls?
      if(field.type === 'section' || field.type === 'step')
        return;

      this.hasValidators(field) ?
        controls[field.name] = new FormControl(field.data, field.validators.map(validator => this.mapValidators(validator))) :
        controls[field.name] = new FormControl();
    });
  }

  hasValidators(field: any) : boolean {
    return field.validators && field.validators.length > 0;
  }

  mapValidators(validator: any) : Validators {
    switch (validator.type){
      case 'required':
        return Validators.required;
      case 'minLength':
        return Validators.minLength(validator.value)
      case 'custom':
        return // Do functiony things, validator.value = func in this case?
    }
  }

  onSubmit(form): void {
    console.log(form);
  }

  generate(): void {

  }
}
