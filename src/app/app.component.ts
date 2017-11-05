import { Component, OnInit } from '@angular/core';
import { /*FormBuilder,*/ FormGroup, FormControl } from '@angular/forms';

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
      },
      {
        type: 'text',
        id: 'LastName',
        name: 'LastName',
        label: 'Last Name',
      }
    ],
    layout: [
      {
        type: 'section'
      }
    ]
  };

  constructor() {
    // this.form = fb.group({
    //   'thing': ['STUFF']
    // });

    this.form = this.processSchema(this.schema);
  }

  processSchema(schema: any) : FormGroup {
    // Validate schema and throw console error if invalid?
    var controls = {};

    schema.fields.map(field => {
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
