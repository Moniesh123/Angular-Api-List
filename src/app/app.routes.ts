import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component'; 
import { NotFoundComponent } from './not-found/not-found.component'; 

export const routes: Routes = [
  { path: '', component: ItemListComponent }, 
  { path: '**', component: NotFoundComponent } 
];