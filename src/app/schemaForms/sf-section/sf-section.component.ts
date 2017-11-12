import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sf-section',
  templateUrl: './sf-section.component.html',
  styleUrls: ['./sf-section.component.scss']
})
export class SFSectionComponent implements OnInit {
  @Input() field: any;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
