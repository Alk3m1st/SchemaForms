import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sf-field',
  templateUrl: './sf-field.component.html',
  styleUrls: ['./sf-field.component.scss']
})

export class SfFieldComponent {
  @Input() field: any;
  @Input() form: FormGroup;
}
