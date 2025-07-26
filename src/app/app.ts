import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component'; // ✅ Importación del componente

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Necesario para usar `imports`
  imports: [RouterOutlet, MenuComponent], // ✅ Asegura que app-menu sea reconocido
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ Corregido styleUrl → styleUrls
})
export class App {
  protected readonly title = signal('frontend');
}

