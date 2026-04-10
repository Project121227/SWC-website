import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeUpDirective } from '../../shared/fade-up.directive';

interface Slide {
  id: string;
  label: string;       // short nav label
  title: string;
  subtitle?: string;
  content: SlideContent;
}

interface SlideContent {
  type: 'intro' | 'conditions' | 'india' | 'andhra' | 'science' | 'goal' | 'philosophy';
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FadeUpDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  currentIndex = 0;
  autoTimer: any;

  slides: Slide[] = [
    { id: 'what',       label: 'About Osteopathy', title: 'What is Osteopathy?',                content: { type: 'intro' } },
    { id: 'conditions', label: 'Conditions',           title: 'Conditions We Treat',               content: { type: 'conditions' } },
    { id: 'india',      label: 'In India',             title: 'Osteopathy in India',               content: { type: 'india' } },
    { id: 'andhra',     label: 'Our Presence',         title: 'Our Presence in Andhra Pradesh',    content: { type: 'andhra' } },
    { id: 'science',    label: 'Science',              title: 'Scientific Foundation',             content: { type: 'science' } },
    { id: 'goal',       label: 'Goal',                 title: 'Goal of an Osteopath',              content: { type: 'goal' } },
    { id: 'philosophy', label: 'Philosophy',           title: 'Our Philosophy',                    content: { type: 'philosophy' } },
  ];

  musculoskeletal = [
    'Back and Neck Pain',
    'Postural Issues',
    'Joint Stiffness',
    'Arthritis',
    'Muscle Strain and Muscle Sprain',
    'Tennis and Golfer\'s Elbow'
  ];
  visceral = [
    'Liver Related Problems',
    'Gastric Issues (Constipation, Bloating, Acidity, Gastric)',
    'Breathing Issues',
    'Menstrual Problems',
    'Thyroid Problems'
  ];
  cranial = [
    'Headache and Migraine',
    'Sinusitis & Rhinitis',
    'Vertigo & Dizziness',
    'Sleep Related Issues',
    'Anxiety and Overthinking'
  ];

  goalPoints = [
    'Identify and treat the root cause of dysfunction',
    'Improve mobility of joints, tissues, and organs',
    'Enhance circulation and nerve function',
    'Support the body\'s inherent self-regulating mechanisms'
  ];

  goTo(i: number) {
    this.currentIndex = i;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
}
