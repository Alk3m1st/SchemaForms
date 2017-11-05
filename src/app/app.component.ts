import { Component, OnInit } from '@angular/core';
import { /*FormBuilder,*/ FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Schema Forms';
  form: FormGroup;
  schema = {
    fields: [
      {
        type: 'text',
        id: 'FirstName',
        name: 'FirstName',
        label: 'First Name',
        placeholder: 'First name goes here...',
        validators: [ Validators.required, Validators.minLength(2) ]
      },
      {
        type: 'text',
        id: 'LastName',
        name: 'LastName',
        label: 'Last Name',
      },
      {
        type: 'textarea',
        id: 'Description',
        name: 'Description',
        label: 'Description',
        placeholder: 'Description here...'
      },
    ],
    layout: [
      {
        type: 'section'
      }
    ]
  };

  constructor() {
    this.form = this.processSchema(this.schema);
  }

  processSchema(schema: any) : FormGroup {
    // Validate schema and throw console error if invalid?
    let controls = {};
    let hasValidators = function(field: any) : boolean {
      return field.validators && field.validators.length > 0;
    }

    schema.fields.map(field => {
      hasValidators(field) ?
        controls[field.name] = new FormControl(null, field.validators) :
        controls[field.name] = new FormControl();
    });

    let fg = new FormGroup(controls);
    return fg;
  }

  ngOnInit(): void {}

  onSubmit(form): void {
    console.log(form);
  }

  generate(): void {

  }
}
