import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Sidebar } from "../../share/components/sidebar/sidebar";
@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    Sidebar
],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isMobile = false;

  constructor(private bp: BreakpointObserver) {
    this.bp.observe(['(max-width: 768px)']).subscribe((result) => (this.isMobile = result.matches));
  }
}
