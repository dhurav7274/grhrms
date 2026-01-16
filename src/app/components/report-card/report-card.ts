
import { Component, Input, } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ReportCardItem } from '../../interface/reportCard.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-report-card',
  imports: [MatIcon,TitleCasePipe],
  templateUrl: './report-card.html',
  styleUrl: './report-card.css',
})
export class ReportCard {
  @Input() data!:ReportCardItem;
}
