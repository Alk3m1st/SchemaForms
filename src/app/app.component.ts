import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        type: 'section',
        legend: 'Address Details',
        fields: [
          {
            type: 'text',
            id: 'LastNameSection',
            name: 'LastNameSection',
            label: 'Last Name Section',
          },
        ],
      },
      {
        type: 'text',
        id: 'FirstName',
        name: 'FirstName',
        label: 'First Name',
        placeholder: 'First name goes here...',
        // validators: [ Validators.required, Validators.minLength(2) ],
        validators: [
          { type: 'required' },
          { type: 'minLength', value: 2 }
        ],
        data: 'Testing things',
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
        placeholder: 'Description here...',
      },
      {
        type: 'select',
        id: 'SelectDropdown',
        name: 'SelectDropdown',
        label: 'Select Dropdown',
        options: ['Option1','Option2','Option3'],
      },
      {
        type: 'step',
        title: 'Step 1 - Personal Details',
        description: '<strong>Fill in you details here</strong>',
        // showProgress:
        // validateEachStep:
        fields: [
          {
            type: 'section',
            legend: 'More Address Details',
            fields: [
              {
                type: 'text',
                id: 'MoreFirstName',
                name: 'MoreFirstName',
                label: 'More First Name',
              }
            ],
          },
          {
            type: 'textarea',
            id: 'AnotherTextArea',
            name: 'AnotherTextArea',
            label: 'Another Text Area',
          }
        ],
      },
    ],
    layout: [
      {
        type: 'section',
        title: 'Section 1',
        fieldsById: '',
      }
    ]
  };

  constructor() {
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
      console.log(field);
      console.log(field.fields !== undefined);

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

  ngOnInit(): void {}

  onSubmit(form): void {
    console.log(form);
  }

  generate(): void {

  }
}
