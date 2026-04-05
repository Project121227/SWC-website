import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeUpDirective } from '../../shared/fade-up.directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Service {
  title: string;
  description: string;
  icon: string;
  safeIcon?: SafeHtml;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FadeUpDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Structural Osteopathy',
      description: 'Realign, restore, and recover your musculoskeletal harmony.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4v16m-4-12l4-4 4 4m-8 8l4 4 4-4"/></svg>'
    },
    {
      title: 'Craniosacral Therapy',
      description: 'Gentle rhythm-based healing for the nervous system.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>'
    },
    {
      title: 'Visceral Manipulation',
      description: 'Addressing organ mobility for whole-body wellness.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'
    },
    {
      title: 'Myofascial Release',
      description: 'Releasing deep connective tissue tension.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1.2M6 7l2 1.2M22 12l-2 1.2M4 12l2 1.2M20 17l-2-1.2M6 17l2-1.2M12 22l-2-1.2m4 0L12 22"/></svg>'
    },
    {
      title: 'Postural Correction',
      description: 'Science-backed alignment for lasting posture health.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 19V6.207a1 1 0 011.609-.793l2.782 2.086c.394.296.609.76.609 1.24v10.26"/></svg>'
    },
    {
      title: 'Wellness Consultation',
      description: 'Personalized lifestyle and body assessment sessions.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.services.forEach(s => {
      s.safeIcon = this.sanitizer.bypassSecurityTrustHtml(s.icon);
    });
  }
}
