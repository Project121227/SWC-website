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
    {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600',
      alt: 'Clinic interior at Sattvaa wellness center'
    },
    {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
      alt: 'Osteopathy therapy session'
    },
    {
      url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600',
      alt: 'Wellness space at Sattvaa wellness center'
    },
    {
      url: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600',
      alt: 'Therapeutic massage session'
    }
  ];
}
