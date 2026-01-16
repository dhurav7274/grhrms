import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../../services/menu-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  public menuList:any = [];
  constructor(private menu: MenuService) {}

  ngOnInit() {
    this.menuList = this.menu.getMenu();
    console.log(this.menuList);

  }

  toggle(menu: any) {
    if (menu.children) {
      menu.expanded = !menu.expanded;
    }
  }
}
