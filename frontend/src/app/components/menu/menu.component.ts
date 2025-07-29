import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./menu.component.css']
})
  export class MenuComponent {
    title = 'gastos';
  }