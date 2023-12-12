import { Component } from '@angular/core';
import { ClassificationrlmComponent } from '../../components/classificationrlm/classificationrlm.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClassificationrlmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
