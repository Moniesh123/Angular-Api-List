import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  dataSource: any[] = [];
  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}