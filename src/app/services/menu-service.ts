import { Injectable } from '@angular/core';
import { MenuItem } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly Menu: MenuItem[] = [
    {
      menuName: 'Dashboard',
      menuIcon: 'dashboard',
      menuPath: '/dashboard',
    },
    {
      menuName: 'Employee',
      menuIcon: 'employee',
      expanded: false,
      children: [
        {
          menuName: 'All Employees',
          menuIcon: 'group',
          menuPath: '/employee',
        },
        {
          menuName: 'Bank Details',
          menuIcon: 'bank',
          menuPath: '/bank-details',
        },
        {
          menuName: 'Employee Assets',
          menuIcon: 'group',
          menuPath: '/employee',
        },
      ],
    },
    {
      menuName: 'Leaves',
      menuIcon: 'event_available',
      expanded: false,
      children: [
        {
          menuName: 'All Leave',
          menuPath: 'leaves',
        },
        {
          menuName: 'apply Leave',
          menuPath: '/apply-leave',
        },
      ],
    },
    {
      menuName:"DepartMents",
      menuIcon:'apartment',
      menuPath:'/department'
    },
    {
      menuName:'Salary',
      menuIcon:'account_balance_wallet',
      expanded:false,
      children:[
        {
          menuName:'Create Salary',
          menuPath:'create-salary'
        },
        {
          menuName:"salary Details",
          menuPath:"salary"
        }
      ]
    }
    ,
    {
      menuName:"setting",
      menuIcon:"setting",
      expanded:false,
      children:[
        {
          menuName:'Create Roles',
          menuPath:"create-roles"
        },
        {
          menuName:"Role Permission",
          menuPath:'role-permission'
        },
        {
          menuName:"Company Setup",
          menuPath:"company-setup"
        }
      ]
    }
  ];
}
