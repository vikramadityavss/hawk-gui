import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  path?: string; // Optional for parent items
  hasSubmenu: boolean;
  submenuItems?: SubmenuItem[];
}

interface SubmenuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isExpanded = true;
  expandedSections: { [key: string]: boolean } = {
    'hedge-accounting': false, // Default collapsed
    'funding-portfolio': false // Default collapsed
  };

  menuItems: MenuItem[] = [
    { id: 'home', title: 'Home', icon: 'home', path: '/home', hasSubmenu: false },
    {
      id: 'hedge-accounting',
      title: 'Hedge Accounting SFX',
      icon: 'calculate',
      path: '', // Empty for parent
      hasSubmenu: true,
      submenuItems: [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Configuration', path: '/configuration' },
        { name: 'Allocation', path: '/allocation' },
        { name: 'Trade', path: '/trade' },
        { name: 'Accounting Hub', path: '/accounting-hub' },
        { name: 'Hedge 360', path: '/hedge-360' },
        { name: 'Reports', path: '/reports' },
        { name: 'Hedge Life-cycle Designer', path: '/hedge-lifecycle' },
        { name: 'System Logs', path: '/system-logs' }
      ]
    },
    {
      id: 'funding-portfolio',
      title: 'Funding & Portfolio Management',
      icon: 'account_balance',
      path: '', // Empty for parent
      hasSubmenu: true,
      submenuItems: [
        { name: 'Portfolio Overview', path: '/portfolio' },
        { name: 'Risk Management', path: '/risk' },
        { name: 'Analytics', path: '/analytics' }
      ]
    }
  ];

  constructor(private router: Router) {}

  toggleSidenav(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleSection(sectionId: string): void {
    if (this.isExpanded || !this.expandedSections[sectionId]) {
      this.expandedSections[sectionId] = !this.expandedSections[sectionId];
    }
  }

  isActiveGroup(item: MenuItem): boolean {
    if (!item.hasSubmenu || !item.submenuItems) return false;
    return this.expandedSections[item.id] && item.submenuItems.some(subItem => this.isActiveRoute(subItem.path));
  }

  isActiveRoute(path: string): boolean {
    return this.router.url === path;
  }
}