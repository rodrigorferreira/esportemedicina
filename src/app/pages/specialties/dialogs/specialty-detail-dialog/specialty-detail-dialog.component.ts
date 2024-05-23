import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-specialty-detail-dialog',
  templateUrl: './specialty-detail-dialog.component.html',
  styleUrls: ['./specialty-detail-dialog.component.css']
})
export class SpecialtyDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
