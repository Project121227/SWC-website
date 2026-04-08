import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeUpDirective } from '../../shared/fade-up.directive';

interface GalleryImage {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FadeUpDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: GalleryImage[] = [
    { url: 'assets/sanctuary.1.jpeg', alt: 'Sattvaa Wellness Center sanctuary view 1' },
    { url: 'assets/sanctuary.2.jpeg', alt: 'Sattvaa Wellness Center sanctuary view 2' },
    { url: 'assets/sanctuary.3.jpeg', alt: 'Sattvaa Wellness Center sanctuary view 3' },
    { url: 'assets/sanctuary.4.jpeg', alt: 'Sattvaa Wellness Center sanctuary view 4' }
  ];
}
