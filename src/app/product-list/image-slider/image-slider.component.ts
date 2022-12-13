import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../model/Slide';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: Slide[] = []

  currentIndex: number = 0

  constructor() { }

  ngOnInit(): void {
  }



}
