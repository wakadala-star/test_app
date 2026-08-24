import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faCoffee,
  faUser,
  faUsers,
  faUserInjured,
  faCalendarCheck,
  faChartBar,
  faFileAlt,
  faDollarSign,
  faBox,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FontAwesomeModule],
  standalone: true,
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  faCalendar = faCalendar;
  faUser = faUser;
  faUsers = faUsers;
  faUserInjured = faUserInjured;
  faCalendarCheck = faCalendarCheck;
  faChartBar = faChartBar;
  faFileAlt = faFileAlt;
  faDollarSign = faDollarSign;
  faBox = faBox;
  faCog = faCog;
}
