import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sf-step',
  templateUrl: './sf-step.component.html',
  styleUrls: ['./sf-step.component.scss']
})
export class SfStepComponent implements OnInit {
  @Input() fields: any[];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
