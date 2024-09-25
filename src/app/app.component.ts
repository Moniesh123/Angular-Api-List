import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ItemListComponent,RouterModule, 
    RouterOutlet ],
})
export class AppComponent {}