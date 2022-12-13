import { Component, Input, OnInit } from '@angular/core';
import { Slide } from './Slide/Slide';

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

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length) {
      this.currentIndex++
    }
    else {
      this.setSlideIndex(0)
    }
  }

  prevSlide() {
    if (this.currentIndex >= 0) {
      this.currentIndex--
    }
    else {
      this.setSlideIndex(this.slides.length)
    }
  }

  setSlideIndex(n: number) {
    this.currentIndex = n
  }

}
