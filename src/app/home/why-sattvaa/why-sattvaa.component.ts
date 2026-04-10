import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeUpDirective } from '../../shared/fade-up.directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Reason {
  title: string;
  icon: string;
  safeIcon?: SafeHtml;
}

@Component({
  selector: 'app-why-sattvaa',
  standalone: true,
  imports: [CommonModule, FadeUpDirective],
  templateUrl: './why-sattvaa.component.html',
  styleUrl: './why-sattvaa.component.scss'
})
export class WhySattvaaComponent {
  reasons: Reason[] = [
    { title: 'Root Cause Approach', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
    { title: 'Non-Invasive Treatment', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>' },
    { title: 'No Side Effects', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>' },
    { title: 'Scientifically Backed', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>' },
    { title: 'Cost Effective', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/><path d="M9 9h1a2 2 0 1 1 0 4H9l3 3m0-7v7"/></svg>' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.reasons.forEach(r => r.safeIcon = this.sanitizer.bypassSecurityTrustHtml(r.icon));
  }
}
