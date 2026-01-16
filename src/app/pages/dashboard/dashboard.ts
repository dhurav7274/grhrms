import { Component } from '@angular/core';
import { ReportCard } from '../../components/report-card/report-card';
import { ReportCardItem } from '../../interface/reportCard.interface';

@Component({
  selector: 'app-dashboard',
  imports: [ReportCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly dashboardSummary: ReportCardItem[] = [
    {
      color: '#05776e',
      logoName: 'person',
      cardTitle: 'total employee',
      cardData: 40,
    },
    {
      color: '#ff3131',
      logoName: 'apartment',
      cardTitle: 'total department',
      cardData: 40,
    },
    {
      color: '#ff914d',
      logoName: 'payments',
      cardTitle: 'Monthly Pay',
      cardData: 40,
    },
    {
      color: '#00bf63',
      logoName: 'trending_down',
      cardTitle: 'total spend money',
      cardData: 40,
    },
    {
      color: '#132841',
      logoName: 'public',
      cardTitle: 'Protal spend money',
      cardData: 40,
    },
    {
      color: '#9333EA',
      logoName: 'campaign',
      cardTitle: 'Google adv spend money',
      cardData: 40,
    },
  ];

  readonly leavesSummary: ReportCardItem[] = [
    {
      logoName: 'assignment',
      color: '#05776e',
      cardTitle: 'Total Leave',
      cardData: 50,
    },
    {
      logoName: 'check_circle',
      color: '#00bf63',
      cardTitle: 'Approve Leave',
      cardData: 40,
    },
    {
      logoName: 'hourglass_bottom',
      color: '#ff914d',
      cardTitle: 'Pending Leave',
      cardData: 5,
    },
    {
      logoName: 'cancel',
      color: '#ff3131',
      cardTitle: 'Pending Leave',
      cardData: 5,
    },
  ];
}
