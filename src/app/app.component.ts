import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SellComponent } from './sell/sell.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    SellComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  photo = [
    { id:1 ,srcImg:'/Image/webb.webp' ,srcAlt:'example web' },
    { id:1 ,srcImg:'/Image/webb2.png' ,srcAlt:'example web' },
    { id:1 ,srcImg:'/Image/webb3.png' ,srcAlt:'example web' },
    { id:1 ,srcImg:'/Image/webb4.jpg' ,srcAlt:'example web' },
    { id:1 ,srcImg:'/Image/webb5.webp' ,srcAlt:'example web' },
    { id:1 ,srcImg:'/Image/webb6.png' ,srcAlt:'example web' },
    { id:1 ,srcImg:'/Image/webb7.jpg' ,srcAlt:'example web' }
  ]
}
