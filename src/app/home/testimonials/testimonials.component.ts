import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      quote: "After years of chronic back pain, Dr. Divyasai's gentle approach brought me lasting relief. I finally feel connected to my body again.",
      name: "Lakshmi Narayana",
      location: "Nellore"
    },
    {
      quote: "Sattvaa is truly a sanctuary. The craniosacral therapy sessions reduced my stress levels immensely. You can feel the real care in every session.",
      name: "Sowmya Reddy",
      location: "Gudur"
    },
    {
      quote: "Brilliant diagnosis and excellent treatment. They don't just treat the pain, they find the root cause. Highly recommended for sustainable health.",
      name: "Ramesh Babu",
      location: "Kavali"
    }
  ];

  currentIndex = 0;
  private autoScrollInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  setSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoScroll();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  restartAutoScroll() {
    this.stopAutoScroll();
    this.startAutoScroll();
  }
}
