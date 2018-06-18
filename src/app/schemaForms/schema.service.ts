import { Injectable } from '@angular/core';

@Injectable()
export class SchemaService {

  constructor() { }

  getSchema(): Object {
    return {
      fields: [
        {
          type: 'step',
          title: 'Complaint and Feedback Form',
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
      ],
      layout: [
        {
          type: 'section',
          title: 'Section 1',
          fieldsById: '',
        }
      ]
    };
  }
}
