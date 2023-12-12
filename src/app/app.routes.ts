import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MidiComponent } from './pages/midi/midi.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'midi',
    component: MidiComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
