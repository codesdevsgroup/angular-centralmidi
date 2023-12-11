import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MidiComponent } from './pages/midi/midi.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'midi',
    component: MidiComponent,
  },
];
