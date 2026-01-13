import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ReportCardItem } from '../../interface/reportCard.interface';

@Component({
  selector: 'app-report-card',
  imports: [NgClass, MatIcon],
  templateUrl: './report-card.html',
  styleUrl: './report-card.css',
})
export class ReportCard {
  readonly card: ReportCardItem = {
    color: 'red',
    logoName: 'person',
    cardTitle: 'Total Employee',
    cardData: 50,
  };
}
