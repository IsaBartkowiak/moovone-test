import { ExcitedCellsService } from './shared/excited-cells.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-excited-cells',
  templateUrl: './excited-cells.component.html',
  styleUrls: ['./excited-cells.component.scss']
})
export class ExcitedCellsComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private readonly excitedCellsService: ExcitedCellsService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      initialConfiguration: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern('^(0|1)+$')]),
      step: new FormControl(1, [Validators.required]),
    });
  }

  get finalConfiguration(): string {
    if (this.form.valid) {
      const formValues = this.form.value;
      return this.excitedCellsService.getCellsState(
        formValues.initialConfiguration.split(''),
        formValues.step
      ).join('');
    }
  }

  get initialConfiguration(): AbstractControl {
    return this.form.controls.initialConfiguration;
  }
}
