import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path:"",
    component:Login
  },
  {
    path:"signup",
    loadComponent:()=>import('./pages/signup/signup').then(m=>m.Signup)
  },
  {
    path:"dashboard",
    loadComponent:()=>import('./pages/layout/layout').then(m=>m.Layout),
    children:[
      {
        path:"",
        loadComponent:()=>import('./pages/dashboard/dashboard').then(m=>m.Dashboard)
      },
      {
        path:"employee",
        loadComponent:()=>import('./pages/employees/employee/employee').then(m=>m.Employee)
      },
      {
        path:"salary",
        loadComponent:()=>import('./pages/salary/salary').then(m=>m.Salary)
      },
      {
        path:"leaves",
        loadComponent:()=>import('./pages/leaves/leaves').then(m=>m.Leaves)
      },
      {
        path:"settings",
        loadComponent:()=>import('./pages/settings/settings').then(m=>m.Settings)
      }
    ]
  }

];
