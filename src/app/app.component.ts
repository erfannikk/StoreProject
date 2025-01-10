import { Component } from '@angular/core';
import { SignalComponent } from './signal/signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
