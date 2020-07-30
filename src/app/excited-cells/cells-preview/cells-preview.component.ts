import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cells-preview',
  templateUrl: './cells-preview.component.html',
  styleUrls: ['./cells-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellsPreviewComponent {

  @Input() configuration: (0 | 1)[];

  constructor() { }

}
