import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SchemaService } from '../schema.service';

@Component({
  selector: 'sf-step',
  templateUrl: './sf-step.component.html',
  styleUrls: ['./sf-step.component.scss']
})
export class SfStepComponent implements OnInit {
  @Input() fields: any[];
  @Input() form: FormGroup;

  constructor(private schemaService: SchemaService) {}

  ngOnInit() {
    if(this.fields.length > 0) {
      this.setDescriptions();
    }
  }

  setDescriptions() : void {
    for(var i = 0; i < this.fields.length; i++) {
      if(this.fields[i].type === 'step' && this.fields[i].descriptionUrl) {
        this.fields[i].description = this.schemaService.getHtml(this.fields[i].descriptionUrl);
      }
    }
  }
}
