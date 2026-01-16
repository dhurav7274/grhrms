import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatLabel } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-employee',
  imports: [
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
  ],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  displayedColumns = [
    'name',
    'position',
    'weight',
    'symbol',
    'position',
    'weight',
    'symbol',
    'star',
  ];
  dataSource = ELEMENT_DATA;
  status: Food[] = [
    { value: '', viewValue: '-All-' },
    { value: 'active', viewValue: 'Active' },
    { value: 'inactive', viewValue: 'inactive' },
    { value: 'pending', viewValue: 'Pending' },
    { value: 'suspend', viewValue: 'Suspend' },
  ];
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
