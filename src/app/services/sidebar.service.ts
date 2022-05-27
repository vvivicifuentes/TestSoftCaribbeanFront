import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Search in Tree B Plus', url: 'tree' },
        { title: 'Create Customer', url: 'customer' },
      ]
    }
  ];
  constructor() { }
}
