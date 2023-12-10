import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-topo-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './topo-navbar.component.html',
  styleUrl: './topo-navbar.component.scss'
})
export class TopoNavbarComponent {
  MatIcon = MatIconModule;
  MatToolbar = MatToolbarModule;
}
