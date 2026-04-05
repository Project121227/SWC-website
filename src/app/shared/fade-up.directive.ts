import { Directive, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFadeUp]',
  standalone: true
})
export class FadeUpDirective implements AfterViewInit, OnDestroy {
  @Output() fadeVisible = new EventEmitter<boolean>();
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('fade-up-element');
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          this.fadeVisible.emit(true);
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // 10% visible triggers it
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
