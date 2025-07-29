import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DatePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.html',
  imports: [
    DatePipe,
    NgIf,
    NgForOf
  ]
})
export class FacturasComponent implements OnInit {
  gastos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3001/api/gastos')
      .subscribe({
        next: (data) => this.gastos = data,
        error: (err) => console.error('Error al obtener gastos:', err)
      });
  }
}