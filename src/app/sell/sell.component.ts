import {  NgClass, NgFor, NgIf } from '@angular/common';
import {  Component, Input, input, OnDestroy, OnInit } from '@angular/core';

export interface Slide {
  id: number;
  srcImg: string;
  srcAlt: string;
}

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [ NgIf, NgClass, NgFor,
  ],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss',
})
export class SellComponent { 
  @Input() photo: Slide[] = [] ;

  
}
