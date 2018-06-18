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
          descriptionUrl: 'url-to-override-description.html',
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

  getHtml(descriptionUrl: string): string {
    // In future use descriptionUrl to make actual http requests for the HTML
    return `
    <div class="instructions">
      <p>The University welcomes and values your feedback as it assists us to improve our standards and quality of service.  We aim to provide an environment which promotes teamwork and respectful treatment of all staff and students.</p>
      <ul>
        <li><strong> <a href="http://complaints.curtin.edu.au/management/advice.cfm" target="_blank">Information  about accessibility</a>, as well as ways to get assistance with making or resolving complaints, is available.</strong></li>
        <li>Any person is entitled to lodge a complaint with the Curtin University Integrity and Standards Unit (ISU). </li>
        <li>To lodge a complaint you need to complete this form. The information you provide on this form will be assessed to determine the appropriate course of action.</li>
        <li>Any information on this form is provided with your consent. </li>
        <li>In order to address the matter, the details of your complaint will be provided to the appropriate decision maker.  </li>
        <li>If your complaint is about someone's behaviour it is likely that the appropriate decision maker will provide the details of your complaint to the person identified to allow them to respond. The details of your complaint may also be provided to potential witnesses.</li>
        <li>After you have submitted this form you will receive a complaint ID number and a copy of your notification by email.</li>
        <li>If you decide not to provide your contact details we will be unable to provide you with an ID number and a copy of your complaint. Without your contact details we may be unable to progress your complaint.</li>
        <li>All personal information is handled in accordance with the Australian Privacy Principles.</li>
      </ul>
    </div>`;
  }
}
