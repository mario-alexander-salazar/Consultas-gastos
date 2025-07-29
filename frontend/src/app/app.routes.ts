import { Routes } from '@angular/router';
import {Home} from './pages/home/home.component';
import {Informacion} from './pages/informacion/informacion';
import {Reporte} from './pages/reporte/reporte';
import {FacturasComponent} from './pages/facturas/facturas';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'informacion',
    component: Informacion
  },
  {
    path: 'facturas',
    component: FacturasComponent
  },
  {
    path: 'reporte',
    component: Reporte
  },
];