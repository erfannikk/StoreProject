import {  NgClass, NgFor, NgIf } from '@angular/common';
import {  Component, CUSTOM_ELEMENTS_SCHEMA, Input, input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [ NgIf, NgClass, NgFor,
  ],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SellComponent { 


  
}
